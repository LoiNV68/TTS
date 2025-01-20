// LocationForm.tsx
import React from 'react';
import { Form, FormInstance } from 'antd';
import LocationSelect from '../filter/LocationSelect';
import { API_COUNTRY_ENDPOINTS } from '../../api/apiConfig';

interface LocationFormProps {
    form: FormInstance;
    children?: (items: React.ReactNode[]) => React.ReactNode;
}

const LocationForm: React.FC<LocationFormProps> = ({ form, children }) => {
    const countryValue = Form.useWatch('country', form);
    const provinceCityValue = Form.useWatch('provinceCode', form);
    const districtValue = Form.useWatch('districtCode', form);

    const formItems = [

        <LocationSelect
            key="country"
            name="country"
            label="Country"
            url={API_COUNTRY_ENDPOINTS.countries()}
            onChange={() => form.resetFields(['provinceCode', 'districtCode', 'wardCode'])}
        />
        ,
        <LocationSelect
            key="provinceCode"
            name="provinceCode"
            label="Province/City"
            disabled={!countryValue}
            url={countryValue && API_COUNTRY_ENDPOINTS.provinces(countryValue)}
            onChange={() => form.resetFields(['districtCode', 'wardCode'])}
        />
        ,
        <LocationSelect
            key="districtCode"
            name="districtCode"
            label="District"
            disabled={!provinceCityValue}
            url={provinceCityValue && API_COUNTRY_ENDPOINTS.districts(provinceCityValue)}
            onChange={() => form.resetFields(['wardCode'])}
        />
        ,
        <LocationSelect
            key="wardCode"
            name="wardCode"
            label="Commune/ward"
            disabled={!districtValue}
            url={districtValue && API_COUNTRY_ENDPOINTS.wards(districtValue)}
        />
    ];

    return <>{children ? children(formItems) : formItems}</>;
};

export default LocationForm;