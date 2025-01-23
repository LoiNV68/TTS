import React from "react";
import { FormInstance, FormItemProps, InputNumber, InputNumberProps } from "antd";
import "./styles.scss";
import { MyFormItem } from "../form";

interface MyInputNumberProps extends InputNumberProps {
    showSuffixIcon?: boolean; // Hiển thị icon mặc định nếu không có giá trị
    suffix?: React.ReactNode; // Cho phép truyền suffix từ ngoài vào
    addonBefore?: React.ReactNode; // Icon phía trước (prefix)
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

const MyInputNumber: React.FC<MyInputNumberProps> = ({
    value,
    showSuffixIcon,
    prefix,
    addonBefore,
    formItem,
    ...props
}) => {
    const {
        name,
        label,
        required = false,
        form,
        rules,
        isShowLabel = true,
        isEnableBlur,
        ...rest
    } = formItem;

    return (
        <MyFormItem
            name={name}
            label={isShowLabel ? label : undefined}
            required={required}
            rules={rules}
            form={form}
            isShowLabel={isShowLabel}
            isEnableBlur={isEnableBlur}
            {...rest}
        >
            <div className="my-input-wrapper">
                <InputNumber
                    {...props}
                    prefix={prefix}
                    className="my-input"
                    style={{
                        width: "100%",
                        opacity: 1,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                />
            </div>
        </MyFormItem>
    );
};

export default MyInputNumber;
