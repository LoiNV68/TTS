import React, { CSSProperties, useState } from 'react'
import { MyCard, MyCardContent } from '../../components/core'
import { MyCollapse } from '../../components/collapse'
import RoomInformation from './RoomInformation';
import { CollapseProps } from 'antd';
import RateInformation from './RateInformation';
import SpecialService from './SpecialService';

const BookingInformation = () => {
    const [activeKey, setActiveKey] = useState<string | string[]>('1');
    const getItems: (
        panelStyle: CSSProperties
    ) => CollapseProps['items'] = panelStyle => [
        {
            key: '1',
            label: 'ROOM INFOMATION',
            children: (
                <RoomInformation />
            ),
            style: panelStyle,
            className: 'collapse-room-info',
        },
        {
            key: '2',
            label: 'RATE INFORMATION',
            children: (
                <RateInformation />
            ),
            style: panelStyle,
            // extra: getExtraChangeRate(),
            className: 'collapse-rate-info',
        },
        {
            key: '3',
            // Loại bỏ flex khi màn hình nhỏ hơn 430px
            label: (
                <div>
                    SPECIAL SERVICE
                </div>
            ),
            // extra: genExtra(),
            children: (
                <SpecialService />
            ),
            style: panelStyle,
        },
    ];
    return (
        <MyCard header='BOOKING INFORMATION'>
            <MyCollapse
                getItems={getItems}
                activeKey={activeKey}
                onChange={setActiveKey}
            />
        </MyCard>
    )
}

export default BookingInformation