import { ColumnsType } from "antd/es/table";
import { DataType } from "../../interfaces/tables/TableType";
import { Tag } from "antd";
import { DeleteIcon, EditIcon } from "../icons";


export const columnsGuestProfile = (handleEdit: (record: DataType) => void, handleDelete: (record: DataType) => void): ColumnsType<DataType> => [
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        width: 120,
        render: (text: string) => <span className="cursor-pointer underline">{text}</span>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 200,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: 100,
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        width: 100,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: 100,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 180,
    },
    {
        title: 'Full Address',
        dataIndex: 'fullAddress',
        key: 'fullAddress',
        width: 250,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        render: (status: string) => (
            <Tag color="green" className="capitalize">
                {status.toLowerCase()}
            </Tag>
        ),
    },
    {
        title: 'ID No',
        dataIndex: 'idNo',
        key: 'idNo',
        width: 150,
    },
    {
        title: 'Actions',
        key: 'actions',
        fixed: 'right',
        width: 100,
        render: (_, record) => (
            <div className="flex justify-center items-baseline">
                <button className="table-action-button" onClick={() => handleEdit(record)}>
                    <div className="icon-wrapper">
                        <EditIcon />
                    </div>
                </button>
                <button className="table-action-button" onClick={() => handleDelete(record)}>
                    <div className="icon-wrapper">
                        <DeleteIcon />
                    </div>
                </button>
            </div>
        ),
    },
];
