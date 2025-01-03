import { Input, InputProps } from "antd";
import React from "react";
import "./styles.scss";

const MyInput: React.FC<InputProps> = (props) => {
    return (
        <div className="my-input-container">
            <Input
                {...props} 
                placeholder="Enter"
                allowClear
                className="my-input"
                style={{
                    opacity: 1,
                    transition: "opacity 0.3s ease-in-out", 
                }}
            />
        </div>
    );
};

export default MyInput;
