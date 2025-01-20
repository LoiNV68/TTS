import React, { useState } from 'react'
import MyCard from './MyCard'
import { Col, FormInstance, Row } from 'antd'
import "./styles.scss"
import LocationForm from '../../components/form/LocationForm'
import { MyInput } from '../../components/input'

interface AddressInformationProps {
    form: FormInstance
}
const AddressInformation: React.FC<AddressInformationProps> = ({ form }) => {
    const [fullAddress, setFullAddress] = useState('');
    const handleInputChange = (e: any) => {
        setFullAddress(e.target.value);
    };
    return (
        <MyCard header='address information'>
            <LocationForm form={form}>
                {(items) => (
                    <>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={12}>{items[0]}</Col>
                            <Col xs={24} sm={12}>{items[1]}</Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={12}>{items[2]}</Col>
                            <Col xs={24} sm={12}>{items[3]}</Col>
                        </Row>
                    </>
                )}
            </LocationForm>
            <Row >
                <Col xs={24} sm={24} md={24}>
                    <MyInput formItem={{
                        name: "fullAddress",
                        label: "Detail Address",
                    }} value={fullAddress} onChange={handleInputChange} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24}>
                    <MyInput formItem={{
                        name: "fullAddress",
                        label: "Full Address",
                    }} value={fullAddress} disabled />
                </Col>
            </Row>
        </MyCard>
    )
}

export default AddressInformation