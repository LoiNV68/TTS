import React from "react";
import { Table } from "antd";
import { TableCustomProps } from "../../../interfaces/tables/TableType";

const TableCustom: React.FC<TableCustomProps> = ({ data, columns, ...props }) => {
    return (
        <Table
            {...props}
            
            sticky
            className="custom-table"
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: "max-content", y: "calc(-10px + 100vh)" }}
            bordered
            size="middle"
        />
    );
};

export default TableCustom;
