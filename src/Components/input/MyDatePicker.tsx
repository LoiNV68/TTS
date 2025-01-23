import React, { useEffect, useState } from 'react';
import { DatePicker, DatePickerProps, FormInstance, FormItemProps } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import './styles.scss';
import { MyFormItem } from '../form';


interface IProps extends FormItemProps {
    disabled?: boolean;
    name: string;
    label: string;
    required?: boolean;
    form?: FormInstance;
    rules?: any[];
    getFieldValue?: (name: string) => any;
}

interface MyDatePickerProps extends Omit<DatePickerProps, 'onChange'> {
    formItem: IProps;
    onChange?: (date: Dayjs | null) => void;

}

const MyDatePicker: React.FC<MyDatePickerProps> = ({
    formItem,
    onChange: propOnChange,
    ...props
}) => {
    const { name, label, required = false, form, rules, ...rest } = formItem;
    const [value, setValue] = useState<Dayjs | null>(form?.getFieldValue(name) || null);

    const handleChange = (date: Dayjs | null) => {
        setValue(date); // Cập nhật local state

        if (propOnChange) {
            propOnChange(date);
        }

        if (form && name) {
            form.setFieldValue(name, date);
        }
    };

    // Theo dõi khi form value thay đổi từ bên ngoài
    useEffect(() => {
        if (form && name) {
            setValue(form.getFieldValue(name));
        }
    }, [form, name]);
    // disable ngày tương lai
    const disableFutureDates = (current: Dayjs | null): boolean => {
        return current ? current.isAfter(dayjs().endOf('day')) : false;
    };
    return (
        <div className="my-datepicker-container">
            <MyFormItem
                name={name}
                label={label}
                required={required}
                rules={rules}
                form={form}
                {...rest}
            >
                <DatePicker
                    {...props}
                    value={value}
                    className="my-input"
                    style={{ width: '100%' }}
                    placeholder="Select"
                    format={'DD/MM/YYYY'}
                    suffixIcon={
                        <CalendarOutlined
                            className={value ? 'calendar-icon' : ''}
                            style={{
                                color: 'initial!important',
                                width: '13px',
                                height: '13px',
                            }}
                        />
                    }
                    disabledDate={disableFutureDates}
                    onChange={handleChange}
                />

            </MyFormItem>
        </div>
    );
};
export default React.memo(MyDatePicker);
