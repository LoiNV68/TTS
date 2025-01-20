import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { MyDatePicker, MyInput, MyRadio, MySelect, Required } from '../../components/input';
import MyCard from './MyCard';

interface PersonInformation {
    error?: boolean;
}

const PersonInformation: React.FC<PersonInformation> = ({ error }) => {
    const optionSelect = [
        { label: 'Mr', value: 'mr' },
        { label: 'Mrs', value: "mrs" },
        { label: 'Miss', value: 'miss' },
        { label: 'Dr', value: 'dr' },
        { label: 'Sir', value: 'sir' },
        { label: 'Madam', value: 'madam' },
    ];

    const optionRadio = [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
        { label: 'Other', value: 'O' },
    ];

    return (
        <MyCard header="Personal Information">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <MySelect 
                        formItem={{
                            name: "salutation",
                            label: "Salutation"
                        }} 
                        options={optionSelect} 
                    />
                </Col>

                <Col xs={24} sm={12} md={16}>
                    <MyInput 
                        formItem={{
                            label: "Guest Name",
                            name: "fullName",
                            required: true,
                            colon: false
                        }} 
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <MyRadio 
                        formItem={{
                            label: "Select Gender",
                            name: "gender",
                            inlineLabel: true
                        }}
                        options={optionRadio}
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24}>
                    <MyDatePicker 
                        formItem={{
                            label: "Birthday",
                            name: "birthdate"
                        }} 
                    />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12}>
                    <MyInput 
                        formItem={{
                            label: "Phone",
                            name: "phone",
                            isEnableBlur: false
                        }} 
                    />
                    <Required error={error} />
                </Col>

                <Col xs={12} sm={12}>
                    <MyInput 
                        formItem={{
                            label: "Email",
                            name: "email",
                        }} 
                    />
                </Col>
            </Row>
        </MyCard>
    );
};

export default PersonInformation;