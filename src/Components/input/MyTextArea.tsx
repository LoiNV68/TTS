import React from 'react';
import { Input } from 'antd';
import { MyFormItem } from '../form';

const { TextArea } = Input;

interface FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    rules?: any[];
    form?: any;
    hideLabel?: boolean;
}

interface MyTextAreaProps extends React.ComponentProps<typeof TextArea> {
    formItem: FormItemProps;
}

const MyTextArea: React.FC<MyTextAreaProps> = ({
    formItem,
    ...props
}) => {
    const {
        name,
        label,
        required = false,
        form,
        rules,
        hideLabel = false
    } = formItem;

    return (
        <MyFormItem
            name={name}
            label={label}
            required={required}
            rules={rules}
            form={form}
            noStyle={hideLabel} // Thêm noStyle khi hideLabel là true
        >
            <TextArea
                {...props}
                allowClear
                placeholder={props.placeholder || 'Enter'}
                className="my-textarea"
                style={{
                    ...props.style,
                    transition: 'opacity 0.3s ease-in-out',
                    width: '100%',
                    marginTop: "2%"
                }}
            />
        </MyFormItem>
    );
};

export default MyTextArea;