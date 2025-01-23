import { CSSProperties, FC, useEffect, useState, forwardRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, FormInstance, FormItemProps } from 'antd';
import './styles.scss';
import { CalendarOutlined } from '@ant-design/icons';
import { ArrowSvg, NightIcon } from '../icons';
import { MyFormItem } from '../form';

const { RangePicker } = DatePicker;

interface IProps extends FormItemProps {
    disabled?: boolean;
    name: string;
    label: string;
    required?: boolean;
    form?: FormInstance;
    rules?: any[];
    getFieldValue?: (name: string) => any;
}

interface MyDateRangePickerProps {
    formItem: IProps;
    disabledDate?: (current: Dayjs) => boolean;
    onChange?: (dates: string[] | null) => void;
    value?: [string, string] | null;
    placeholder?: undefined | [string, string];
    style?: CSSProperties | undefined;
    className?: string;
    dateDisabled?: [string, string] | null;
}

// Sử dụng forwardRef
const MyDateRangePicker = forwardRef<any, MyDateRangePickerProps>((props, ref) => {
    const {
        formItem,
        onChange,
        value,
        placeholder = ['Select', 'Select'],
        style,
        className,
        disabledDate,
        dateDisabled,
        ...rest
    } = props;

    const { name, label, required = false, form, rules, ...formItemRest } = formItem;

    // Thiết lập ngày mặc định là ngày hiện tại + 1 ngày
    const today = dayjs();
    const defaultStartDate = today;
    const defaultEndDate = today.add(1, 'day');

    // Chuyển đổi giá trị từ string sang Dayjs
    const initialDates: [Dayjs | null, Dayjs | null] | null = value
        ? [dayjs(value[0]), dayjs(value[1])]
        : [defaultStartDate, defaultEndDate];

    const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(initialDates);
    const [numNights, setNumNights] = useState<number>(1); // Mặc định là 1 đêm

    const handleChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
        setDateRange(dates);

        if (dates && dates[0] && dates[1]) {
            // Tính số ngày giữa hai ngày được chọn
            const nights = dates[1].diff(dates[0], 'day');
            setNumNights(nights);

            // Chuyển đổi giá trị sang định dạng string YYYY-MM-DD
            const formattedDates = [
                dates[0].format('YYYY-MM-DD'),
                dates[1].format('YYYY-MM-DD'),
            ];
            onChange && onChange(formattedDates);
        } else {
            setNumNights(0);
            onChange && onChange(null);
        }
    };

    useEffect(() => {
        if (value) {
            const start = dayjs(value[0]);
            const end = dayjs(value[1]);
            setDateRange([start, end]);
            setNumNights(end.diff(start, 'day'));
        } else {
            setDateRange(null);
            setNumNights(0);
        }
    }, [value]);

    const disabled = (current: Dayjs) => {
        if (dateDisabled && dateDisabled[0] && dateDisabled[1]) {
            const start = dayjs(dateDisabled[0]).startOf('day');
            const end = dayjs(dateDisabled[1]).endOf('day');
            if (current.isBefore(start) || current.isAfter(end)) {
                return true;
            }
        } else {
            const today = dayjs().startOf('day');
            if (current.isBefore(today)) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className='range-wrapper'>
            <MyFormItem
                name={name}
                label={label}
                required={required}
                rules={rules}
                form={form}
                {...formItemRest}
            >
                <RangePicker
                    className={`my-date-range-picker ${className}`}
                    style={style}
                    value={dateRange}
                    onChange={handleChange}
                    disabledDate={disabled}
                    suffixIcon={<CalendarOutlined style={{
                        color: 'initial!important',
                        width: '13px',
                        height: '13px',
                    }} />}
                    separator={<ArrowSvg />}
                    format="DD/MM/YYYY"
                    placeholder={placeholder}
                    {...rest}
                />
            </MyFormItem>
            <div className="count-night">
                <NightIcon />
                <span>{numNights}</span>
                <span>Night</span>
            </div>
        </div>
    );
});

export default MyDateRangePicker;
