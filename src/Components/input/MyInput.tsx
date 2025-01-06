import React from "react";
import { Input, InputProps } from "antd";
import { EditOutlined } from '@ant-design/icons';
import "./styles.scss";

interface MyInputProps extends InputProps {
    showSuffixIcon?: boolean; // Thêm tùy chọn showSuffixIcon
}

const MyInput: React.FC<MyInputProps> = ({ value, showSuffixIcon, ...props }) => {
    return (
        <Input
            {...props}
            value={value}
            placeholder="Enter"
            allowClear
            suffix={showSuffixIcon && !value ? <EditOutlined /> : null} 
            className="my-input"
            style={{
                opacity: 1,
                transition: "opacity 0.3s ease-in-out",
            }}
        />
    );
};

export default MyInput;
