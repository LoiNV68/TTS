import React from 'react';
import { Form } from 'antd';
import LocationForm from './LocationForm';
import { AdvancedFormProps } from '../../interfaces/search/AdvancedSearch';
import { MyDatePicker, MyInput } from '../input';

const AdvancedForm: React.FC<AdvancedFormProps> = ({ form, ...props }) => {
    return (
        <Form form={form} layout="vertical" {...props}>
            <LocationForm form={form} />

            <MyInput
                formItem={{
                    name: "fullAddress",
                    label: "Full Address",
                }}
                showSuffixIcon
            />
            <MyInput
                formItem={{
                    name: "createdBy",
                    label: "Created By",
                }}
                showSuffixIcon
            />

            <MyDatePicker formItem={{
                name: "createdDate",
                label: "Created At",
            }} />

            <MyInput
                formItem={{
                    name: "modifiedBy",
                    label: "Modified By",
                }}
                showSuffixIcon
            />
            <MyDatePicker formItem={{
                name: "modifiedDate",
                label: "Modified At",
            }} />
        </Form>
    );
};

export default AdvancedForm;
