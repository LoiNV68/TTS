import React from 'react';
import { Space, Table, Tag } from 'antd';

interface FormValues {
    key: string;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags?: string[];
}

interface TableProps {
    data: FormValues[];
    onDelete: (key: string) => void;
    onEdit: (record: FormValues) => void;
}

const { Column, ColumnGroup } = Table;

const TableComponent: React.FC<TableProps> = ({ data, onDelete, onEdit }) => {
    return (
        <Table dataSource={data} rowKey="key" size="small" bordered>
            <ColumnGroup title="Họ và tên">
                <Column
                    title="Họ"
                    dataIndex="firstName"
                    key="firstName"
                    sorter={(a: FormValues, b: FormValues) =>
                        a.firstName.localeCompare(b.firstName)
                    }
                />
                <Column
                    title="Tên"
                    dataIndex="lastName"
                    key="lastName"
                    sorter={(a: FormValues, b: FormValues) =>
                        a.lastName.localeCompare(b.lastName)
                    }
                />
            </ColumnGroup>
            <Column
                title="Tuổi"
                dataIndex="age"
                key="age"
                sorter={(a: FormValues, b: FormValues) => a.age - b.age}
            />
            <Column
                title="Địa chỉ"
                dataIndex="address"
                key="address"
                sorter={(a: FormValues, b: FormValues) =>
                    a.address.localeCompare(b.address)
                }
            />
            <Column
                title="Nghề"
                dataIndex="tags"
                key="tags"
                render={(tags: string[]) =>
                    tags && tags.length > 0 ? (
                        tags.map((tag) => (
                            <Tag color="geekblue" key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        ))
                    ) : (
                        <Tag color="volcano">THẤT NGHIỆP</Tag>
                    )
                }
            />
            <Column
                title="Hành động"
                key="action"
                render={(record: FormValues) => (
                    <Space size="middle">
                        <a
                            className="text-base"
                            onClick={() => onEdit(record)}
                        >
                            Sửa
                        </a>
                        <a
                            className="text-base text-red-500"
                            onClick={() => onDelete(record.key)}
                        >
                            Xóa
                        </a>
                    </Space>
                )}
            />
        </Table>
    );
};

export default TableComponent;
