import React from 'react';
import { DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import './styles.scss';

const MyDatePicker: React.FC = (props) => {
    const disableFutureDates = (current: Dayjs | null): boolean => {
        return current ? current.isAfter(dayjs().endOf('day')) : false;
    };

    return (
        <div className="my-datepicker-container" style={{ position: 'relative' }}>
            <DatePicker
                {...props}
                id="createdDate"
                className="my-date-picker my-input"
                style={{ width: '100%', transition: 'opacity 0.3s ease-in-out' }}
                placeholder="Select"
                suffixIcon={<CalendarOutlined style={{ marginRight: '-6px',color: 'initial !important' }} />}
                disabledDate={disableFutureDates}
            />
        </div>
    );
};

export default MyDatePicker;
