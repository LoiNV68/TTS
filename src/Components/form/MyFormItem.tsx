import { Form, FormInstance, FormItemProps } from 'antd';
import React, { ReactNode, useEffect, useRef } from 'react';
import './styles.scss';
import { omit } from 'lodash';

interface IProps extends FormItemProps {
    children: ReactNode;
    form?: FormInstance;
    initialValue?: any;
    isShowLabel?: boolean;
    isEnableBlur?: boolean; // Prop để kiểm soát onBlur
}

const MyFormItem: React.FC<IProps> = (props) => {
    const {
        label,
        required = false,
        children,
        form,
        initialValue,
        isShowLabel = true,
        isEnableBlur = true, // Mặc định bật onBlur
        ...rest
    } = props;

    const rules = rest.rules || [];
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // Thêm rule required nếu cần
    if (required) {
        rules.push({
            required: true,
            message: `${label} is required`,
        });
    }

    // Tạo label tùy chọn
    const getLabel = () => {
        if (!isShowLabel) return null;
        return (
            <span className="label-txt label-form">
                {label}
                {required && <span className="label-start"> *</span>}
            </span>
        );
    };

    // Xử lý sự kiện onBlur với debounce (nếu được kích hoạt)
    const handleBlur = () => {
        if (rules.length > 0) {
            const fieldName = rest.name;
            if (form && fieldName) {
                if (debounceRef.current) {
                    clearTimeout(debounceRef.current);
                }
                debounceRef.current = setTimeout(() => {
                    form.validateFields([fieldName]);
                }, 300);
            }
        }
    };

    useEffect(() => {
        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    // Clone children nếu isEnableBlur = true
    const mergedChildren = React.isValidElement(children) && isEnableBlur
        ? React.cloneElement(children as React.ReactElement<any>, {
            onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur();
                if (typeof children.props.onBlur === 'function') {
                    children.props.onBlur(e);
                }
            },
        })
        : children;



    return (
        <Form.Item
            label={getLabel()}
            rules={rules}
            colon={false}
            validateTrigger={isEnableBlur ? ['onBlur'] : ['onChange']}
            required={false}
            labelCol={{ span: 24 }}
            initialValue={initialValue}
            {...omit(rest, ['rules', 'isEnableBlur'])}>
            {mergedChildren}
        </Form.Item>
    );
};

export default MyFormItem;
