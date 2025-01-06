import { Form } from 'antd';
import React from 'react';
import { MyDatePicker, MyInput } from '../input';
import { AdvancedFormProps } from '../../interfaces/search/AdvancedSearch';
import { API_COUNTRY_ENDPOINTS } from '../../api/apiConfig';
import LocationSelect from './LocationSelect';

const AdvancedForm: React.FC<AdvancedFormProps> = ({ form, ...props }) => {
    const resetFields = (fields: string[]) => {
        const resetObject: Record<string, undefined> = {};
        fields.forEach(field => {
            resetObject[field] = undefined;
        });
        form.setFields(fields.map(field => ({
            name: field,
            value: undefined
        })));
    };
    const countryValue = Form.useWatch('country', form);
    const provinceCityValue = Form.useWatch('provinceCity', form);
    const districtValue = Form.useWatch('district', form);
    return (
        <Form form={form} layout="vertical" {...props}>
            <Form.Item name="country" label="Country">
                <LocationSelect
                    url={API_COUNTRY_ENDPOINTS.countries()}
                    onChange={() => resetFields(["provinceCity", "district", "communeWard"])}
                />
            </Form.Item>
            <Form.Item name="provinceCode" label="City">
                <LocationSelect
                    disabled={!countryValue}
                    url={countryValue && API_COUNTRY_ENDPOINTS.provinces(countryValue)}
                    onChange={() => resetFields(["district", "communeWard"])}
                />
            </Form.Item>
            <Form.Item name="districtCode" label="District">
                <LocationSelect
                    disabled={!provinceCityValue}
                    url={provinceCityValue && API_COUNTRY_ENDPOINTS.districts(provinceCityValue)}
                    onChange={() => resetFields(["communeWard"])}
                />
            </Form.Item>
            <Form.Item name="wardCode" label="Commune/Ward">
                <LocationSelect
                    disabled={!districtValue}
                    url={districtValue && API_COUNTRY_ENDPOINTS.wards(districtValue)}
                />
            </Form.Item>

            <Form.Item label="Full Address" name="fullAddress">
                <MyInput showSuffixIcon={true} />
            </Form.Item>

            <Form.Item label="Created By" name="createdBy">
                <MyInput showSuffixIcon={true} />
            </Form.Item>

            <Form.Item label="Created At" name="createdDate">
                <MyDatePicker />
            </Form.Item>

            <Form.Item label="Modified By" name="modifiedBy">
                <MyInput showSuffixIcon={true} />
            </Form.Item>

            <Form.Item label="Modified At" name="modifiedDate">
                <MyDatePicker />
            </Form.Item>
        </Form>
    );
};

export default AdvancedForm;