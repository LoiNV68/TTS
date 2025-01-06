import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import './styles.scss';

const MyDatePicker: React.FC = (props) => {
    const [dateValue, setDateValue] = useState<Dayjs | null>(null);

    const disableFutureDates = (current: Dayjs | null): boolean => {
        return current ? current.isAfter(dayjs().endOf('day')) : false;
    };

    const handleChange = (date: Dayjs | null) => {
        setDateValue(date);
    };

    return (
        <div className="my-datepicker-container" style={{ position: 'relative' }}>
            <DatePicker
                {...props}
                id="createdDate"
                className="my-date-picker my-input"
                style={{ width: '100%', transition: 'opacity 0.3s ease-in-out' }}
                placeholder="Select"
                suffixIcon={
                    <CalendarOutlined
                        className={dateValue ? "calendar-icon" : ""}
                        style={{
                            color: 'initial !important', width: "13px", height: "13px"
                        }}
                    />
                }
                disabledDate={disableFutureDates}
                onChange={handleChange}
            />
        </div>
    );
};

export default MyDatePicker;
