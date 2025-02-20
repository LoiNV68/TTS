import React from "react";
import { FormInstance, FormItemProps, Input, InputProps } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "./styles.scss";
import { MyFormItem } from "../form";

interface MyInputProps extends InputProps {
    showSuffixIcon?: boolean; // Hiển thị icon mặc định nếu không có giá trị
    suffix?: React.ReactNode; // Cho phép truyền suffix từ ngoài vào
    formItem: IProps;
}

interface IProps extends FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    form?: FormInstance;
    rules?: any[];
    isShowLabel?: boolean;
    isEnableBlur?: boolean;
}

const MyInput: React.FC<MyInputProps> = ({
    value,
    showSuffixIcon,
    suffix,
    formItem,
    ...props
}) => {
    const {
        name,
        label,
        required = false,
        form,
        rules,
        isShowLabel = true, // Mặc định hiển thị label
        isEnableBlur,
        ...rest
    } = formItem;

    return (
        <MyFormItem
            name={name}
            label={isShowLabel ? label : undefined} // Nếu isShowLabel = false, bỏ label
            required={required}
            rules={rules}
            form={form}
            isShowLabel={isShowLabel}
            isEnableBlur={isEnableBlur}
            {...rest}
        >
            <Input
                {...props}
                value={value}
                placeholder={props.placeholder ? props.placeholder : "Enter"}
                allowClear
                suffix={suffix || (showSuffixIcon && !value ? <EditOutlined /> : null)}
                className="my-input"
                style={{
                    opacity: 1,
                    transition: "opacity 0.3s ease-in-out",
                }}
            />
        </MyFormItem>
    );
};


export default MyInput;
