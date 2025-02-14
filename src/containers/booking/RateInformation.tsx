import React, { useState } from 'react'
import { MyCard } from '../../components/core'
import { CircleIcon } from '../../components/icons'
import { MyTable } from '../../components/table'
import { columnsRateInfo } from '../../components/columns'
import { Table } from 'antd';
const RateInformation = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // Xử lý chọn dòng
    const onSelectChange = (selectedRowKeys: React.Key[]) => {
        console.log('Selected row keys:', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    return (

        <MyCard header='BOOKING INFORMATION'>
            <div className="change-rate" style={{ cursor: "not-allowed", opacity: "0.5" }}>
                <CircleIcon />
                <span>Change</span>
            </div>
            <MyTable data={[]} columns={columnsRateInfo} ShowFooter={false} />
        </MyCard>
    )
}

export default RateInformation