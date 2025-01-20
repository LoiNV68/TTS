import React, { useState } from "react";
import { Radio, FormInstance, FormItemProps, RadioChangeEvent } from "antd";
import { MyFormItem } from "../form";
import "./styles.scss";

interface IFormItemProps extends FormItemProps {
    name: string;
    label: string;
    required?: boolean;
    form?: FormInstance;
    rules?: any[];
    isShowLabel?: boolean;
    inlineLabel?: boolean;
}

interface MyRadioProps {
    formItem: IFormItemProps;
    options: {
        label: string;
        value: string | number;
    }[];
}

const MyRadio: React.FC<MyRadioProps> = ({
    formItem,
    options = [],
    ...props
}) => {
    const {
        name,
        label,
        required = false,
        form,
        rules,
        isShowLabel,
        inlineLabel = true,
        ...rest
    } = formItem;
    const [value, setValue] = useState("F");
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };
    return (
        <MyFormItem
            name={name}
            label={label}
            required={required}
            rules={rules}
            form={form}
            isShowLabel={isShowLabel}
            className={inlineLabel ? 'inline-label-radio' : ''}
            {...rest}
        >
            <Radio.Group
                {...props}
                onChange={onChange}
                className="my-radio-group"
                value={value}
            >
                {options.map((option) => (
                    <Radio key={option.value} value={option.value}>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </MyFormItem>
    );
};

export default MyRadio;