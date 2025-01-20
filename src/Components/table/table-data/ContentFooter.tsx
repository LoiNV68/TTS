import React from 'react';
import PaginationCustom from './PaginationCustom';
import { TablePaginationConfig } from 'antd/es/table';

interface ContentFooterProps {
    pagination: TablePaginationConfig;
    onChange: (page: number, pageSize: number) => void;
}

const ContentFooter: React.FC<ContentFooterProps> = ({
    pagination,
    onChange
}) => {
    return (
        <div className='content-footer'>
            <div className='content-footer-container'>
                <div className='content-footer-note'></div>
                <PaginationCustom
                    current={pagination.current}
                    pageSize={pagination.pageSize}
                    total={pagination.total}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default ContentFooter;