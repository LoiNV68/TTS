import React from 'react';
import TableCustom from './TableCustom';
import ContentFooter from './ContentFooter';
import { MyTableProps } from '../../../interfaces/tables/TableType';
import "./styles.scss";

const MyTable: React.FC<MyTableProps> = ({
    data,
    pagination,
    handlePaginationChange
}) => {
    const handleChange = (page: number, pageSize: number) => {
        if (handlePaginationChange) {
            handlePaginationChange(page, pageSize);
        }
    };

    return (
        <div className='content-table'>
            <TableCustom data={data} />
            <ContentFooter 
                pagination={{
                    current: pagination?.current || 1,
                    pageSize: pagination?.pageSize || 15,
                    total: pagination?.total || 0,
                }}
                onChange={handleChange}
            />
        </div>
    );
};

export default MyTable;