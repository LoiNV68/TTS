import moment from 'moment';
import { message } from 'antd';
import { ApiDataItem, DataTypeExport } from '../../interfaces/tables/TableType';
import { exportListToExcel } from '../table/export/ExportListToExcel';


// Hàm định dạng dữ liệu 
const formatDataForExport = (data: ApiDataItem[]): Record<string, any>[] => {
    return data.map((item) => ({
        Code: item.guestNo,
        Salutation: "",
        Name: item.fullName,
        Gender: item.gender === "F" ? "Female" : "Male",
        Birthday: item.birthdate ? moment(item.birthdate).format('DD/MM/YYYY') : '',
        Phone: item.phone,
        Email: item.email,
        Country: "",
        Province: "",
        District: "",
        'Commune/Ward': "",
        DetailAddress: "",
        "Full Address": item.fullAddress,
        Status: item.status === "A" ? "Active" : "Inactive",
        Type: item.idType,
        'ID No': item.idNo,
        "Issue Place": item.idIssuer,
        "Issue Date": item.idDate ? moment(item.idDate).format('DD/MM/YYYY') : '',
        "Expiry Date": item.idExpiryDate ? moment(item.idExpiryDate).format('DD/MM/YYYY') : '',
        Remark: "",
        "Created At": item.createdDate ? moment(item.createdDate).format('DD/MM/YYYY') : '',
        "Modified At": item.modifiedDate ? moment(item.modifiedDate).format('DD/MM/YYYY') : '',
        "Modified By": item.modifiedBy
    }));
};

// Hàm xuất dữ liệu ra Excel
const exportToExcel = async (dataExport: ApiDataItem[]) => {
    if (!dataExport || dataExport.length === 0) {
        message.error('No data available to export.');
        return;
    }

    try {
        const formattedData = formatDataForExport(dataExport);
        const header: DataTypeExport<string>[] = [
            { title: 'Code', key: 'Code' },
            { title: 'Salutation', key: 'Salutation' },
            { title: 'Name', key: 'Name' },
            { title: 'Gender', key: 'Gender' },
            { title: 'Birthday', key: 'Birthday' },
            { title: 'Phone', key: 'Phone' },
            { title: 'Email', key: 'Email' },
            { title: 'Country', key: 'Country' },
            { title: 'Province', key: 'Province' },
            { title: 'District', key: 'District' },
            { title: 'Commune/Ward', key: 'Commune/Ward' },
            { title: 'Detail Address', key: 'DetailAddress' },
            { title: 'Full Address', key: 'Full Address' },
            { title: 'Status', key: 'Status' },
            { title: 'Type', key: 'Type' },
            { title: 'ID No', key: 'ID No' },
            { title: 'Issue Place', key: 'Issue Place' },
            { title: 'Issue Date', key: 'Issue Date' },
            { title: 'Expiry Date', key: 'Expiry Date' },
            { title: 'Remark', key: 'Remark' },
            { title: 'Created At', key: 'Created At' },
            { title: 'Modified At', key: 'Modified At' },
            { title: 'Modified By', key: 'Modified By' }
        ];

        // Kiểm tra kích thước tệp trước khi xuất
        const estimatedSize = JSON.stringify(formattedData).length / 1024 / 1024;
        if (estimatedSize > 5) {
            message.error('Error: Export failed. File size exceeds 5MB.');
            return;
        }

        await exportListToExcel(formattedData, header, 'Guest_Profile');
        message.success('Export successfully');
    } catch (error) {
        message.error('Error occurred during file export: ' + error);
    }
};
export default exportToExcel;