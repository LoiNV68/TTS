import React from "react";
import { Select } from "antd";
import "./styles.scss";
import { DownIcon } from "../icons";
import { MySelectProps } from "../../interfaces/search/AdvancedSearch";
import { MyFormItem } from "../form";

const { Option } = Select;


const MySelect: React.FC<MySelectProps> = ({
    formItem,
    options = [],
    ...props
}) => {
    const { name, label, required = false, form, rules, ...rest } = formItem;

    return (
        <MyFormItem
            name={name}
            label={label}
            required={required}
            rules={rules}
            form={form}
            {...rest}
        >
            <Select
                {...props}
                allowClear
                className="my-select"
                placeholder="Select"
                style={{
                    width: "100%",
                    opacity: 1,
                    transition: "opacity 0.3s ease-in-out",
                }}
                suffixIcon={<DownIcon width="9px" height="9px" />}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </MyFormItem>
    );
};

export default MySelect;