import React from "react";
import { Select } from "antd";
import "./styles.scss";
import { DownIcon } from "../icons";
import { MySelectProps } from "../../interfaces/search/AdvancedSearch";
const { Option } = Select;

const MySelect: React.FC<MySelectProps> = ({
    options = [],
    ...props
}) => {
   

    return (
        <div className="my-select-container" style={{ position: "relative" }}>
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
                suffixIcon={<DownIcon width="8px" height="8px" />}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}

            </Select>
        </div>
    );
};

export default MySelect;
