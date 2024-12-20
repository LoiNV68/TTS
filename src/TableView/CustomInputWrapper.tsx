import { FormInstance } from 'antd';
import React, { useState, ReactElement } from 'react';

interface Rule {
    type: string;
    value: unknown;
}

interface CustomInputWrapperProps {
    children: ReactElement;
    rules?: Rule[];
    form: FormInstance;
    name: string;
    [key: string]: unknown;
}

const CustomInputWrapper: React.FC<CustomInputWrapperProps> = ({ children, rules = [], form, name, ...props }) => {
    const [customValue, setCustomValue] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        const newErrors: string[] = [];

        for (const rule of rules) {
            if (typeof rule.value === "number") {
                if (rule.type === "max" && newValue.length > rule.value) {
                    // Cắt chuỗi về đúng maxLength
                    newValue = newValue.slice(0, rule.value);
                    // Chỉ thêm lỗi nếu chưa tồn tại
                    if (!newErrors.includes(`Không được vượt quá ${rule.value} ký tự!`)) {
                        newErrors.push(`Không được vượt quá ${rule.value} ký tự!`);
                    }
                }
            }

        }

        setCustomValue(newValue);
        setErrors(newErrors);

        if (newErrors.length > 0) {
            form.setFields([
                {
                    name,
                    errors: newErrors,
                },
            ]);
        } else {
            form.setFieldsValue({
                [name]: newValue,
            });
        }
    };

    const childProps = {
        ...props,
        value: customValue,
        onChange: handleChange,
    };

    return React.cloneElement(children, childProps);
};



export default CustomInputWrapper;