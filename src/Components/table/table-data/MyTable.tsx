import React from 'react';
import TableCustom from './TableCustom';
import ContentFooter from './ContentFooter';
import { MyTableProps } from '../../../interfaces/tables/TableType';
import "./styles.scss";

const MyTable: React.FC<MyTableProps> = ({
    data,
    columns,
    pagination,
    handlePaginationChange,
    ShowFooter = true,
    ...rest
}) => {
    const handleChange = (page: number, pageSize: number) => {
        if (handlePaginationChange) {
            handlePaginationChange(page, pageSize);
        }
    };

    return (
        <div className='content-table'>
            <TableCustom data={data} columns={columns} {...rest} />
            {ShowFooter &&
                <ContentFooter
                    pagination={{
                        current: pagination?.current || 1,
                        pageSize: pagination?.pageSize || 15,
                        total: pagination?.total || 0,
                    }}
                    onChange={handleChange}
                />
            }
        </div>
    );
};

export default MyTable;