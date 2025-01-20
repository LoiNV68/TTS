import React from 'react';
import { Pagination } from 'antd';

interface PaginationCustomProps {
    current?: number;
    pageSize?: number;
    total?: number;
    onChange?: (page: number, pageSize: number) => void;
}

const PaginationCustom: React.FC<PaginationCustomProps> = ({
    current = 1,
    pageSize = 15,
    total = 0,
    onChange
}) => {
    const handleChange = (page: number, size: number) => {
        if (onChange) {
            onChange(page, size);
        }
    };

    return (
        <Pagination
            current={current}
            pageSize={pageSize}
            total={total}
            onChange={handleChange}
            showSizeChanger
            pageSizeOptions={['15', '30']}
            showTotal={(total) => `Total: ${total}`}
        />
    );
};

export default PaginationCustom;