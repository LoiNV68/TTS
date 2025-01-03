import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import dayjs from 'dayjs';
import { isArray } from 'lodash';
import { DataTypeExport } from '../../../interfaces/tables/TableType';

export const exportListToExcel = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    header: DataTypeExport<any>[],
    name: string,
) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    const imageColumnKey = 'thumbnail_image';
    // Add table headers
    const headers = header.map(column => column.title);
    const headerRow = worksheet.addRow(headers);

    // Style for header row
    headerRow.eachCell({ includeEmpty: true }, cell => {
        cell.font = { bold: true };
        cell.alignment = {
            horizontal: 'left',
            vertical: 'middle',
            wrapText: true,
        };
        cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
        };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFCCCCCC' },
        };
    });

    // Add data to table
    // eslint-disable-next-line prefer-const
    for (let record of data) {
        const row = header.map(column => {
            const keys = column.key?.split('.');
            let value = record;
            if (isArray(keys)) {
                for (const key of keys) {
                    value = value ? value[key] : '';
                }
            }
            return value;
        });

        const dataRow = worksheet.addRow(row);

        // Style for data rows
        dataRow.eachCell({ includeEmpty: true }, cell => {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' },
            };
            cell.alignment = {
                horizontal: 'left',
                vertical: 'middle',
                wrapText: true,
            };
        });
        if (record[imageColumnKey]) {
            const image = await fetch(record[imageColumnKey]).then(res => res.blob());
            const reader = new FileReader();

            await new Promise<void>(resolve => {
                reader.onload = () => {
                    if (reader.result) {
                        const base64Image = reader.result.toString().split(',')[1];
                        const imageId = workbook.addImage({
                            base64: base64Image,
                            extension: 'png',
                        });

                        /// Tìm chỉ số cột cho imageColumnKey
                        const imageColumnIndex = header.findIndex(col => col.key === imageColumnKey);
                        if (imageColumnIndex !== -1) {
                            worksheet.getColumn(imageColumnIndex + 1).width = 50;
                            worksheet.getRow(dataRow.number).height = 50;
                            worksheet.addImage(imageId, {
                                tl: { col: imageColumnIndex, row: dataRow.number - 1 }, // Chèn vào hàng dữ liệu đúng
                                ext: {
                                    width: 68, // Kích thước chiều rộng hình ảnh
                                    height: 65 // Kích thước chiều cao hình ảnh
                                },
                            });

                            // Xóa dữ liệu trong ô tương ứng
                            dataRow.getCell(imageColumnIndex + 1).value = null;
                        }
                    }
                    resolve();
                };
                reader.readAsDataURL(image);
            });
        }
    }

    // Auto-fit column widths based on content
    header.forEach((column, colIndex) => {
        let maxLength = column.title.length + 2; // Initial with header length
        worksheet.getColumn(colIndex + 1).eachCell({ includeEmpty: true }, cell => {
            const cellLength = cell.value ? cell.value.toString().length : 0;
            if (cellLength > maxLength) {
                maxLength = cellLength;
            }
        });
        worksheet.getColumn(colIndex + 1).width = maxLength < 10 ? 10 : maxLength;
    });

    // Export to Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const fileName = `${name}_${dayjs().format('YYMMDDHHmmss')}.xlsx`;
    saveAs(new Blob([buffer]), fileName);
};