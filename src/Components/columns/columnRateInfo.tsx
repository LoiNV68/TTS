import { ColumnsType } from "antd/es/table";

export const columnsRateInfo: ColumnsType<any> = [
    { title: 'No', dataIndex: 'no', key: 'no', width: 120 },
    { title: 'Date', dataIndex: 'date', key: 'date', width: 200 },
    { title: 'Source ID', dataIndex: 'source_id', key: 'source_id', width: 100 },
    { title: 'Room Type', dataIndex: 'room_type', key: 'room_type', width: 100 },
    { title: 'Guest', dataIndex: 'guest', key: 'guest', width: 100 },
    { title: 'Package', dataIndex: 'package', key: 'package', width: 180 },
    { title: 'Rate', dataIndex: 'rate', key: 'rate', width: 250 },
    { title: 'Remark', dataIndex: 'remark', key: 'remark', width: 100 },
];


