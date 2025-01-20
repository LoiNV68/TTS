import React from 'react'
import MyCard from './MyCard'
import { Col, FormInstance, Row } from 'antd'
import { FileUpload, MyDatePicker, MyInput, MySelect, Required } from '../../components/input'

interface IProps {
    form?: FormInstance
    error?: boolean
    hasIdNo: boolean
}

const DocumentInformation: React.FC<IProps> = ({ error = false, hasIdNo }) => {
    const selectOptions = [
        { label: 'Căn cước công dân (cũ)', value: "CCCD" },
        { label: 'Căn cước công dân gắn chip', value: "CHIP" },
        { label: 'Căn cước', value: "CC" },
        { label: 'Giấy phép lái xe', value: "LX" },
        { label: 'Hộ chiếu', value: "HC" },
        { label: 'Khác', value: "ORTHER" },
        { label: 'Chứng minh nhân dân', value: "CMND" },
    ];

    return (

        <MyCard header='Document information'>
            <Row gutter={[16, 16]}>

                <Col xs={12} sm={12} md={12}>
                    <MySelect formItem={{
                        label: "ID Type",
                        name: "idType",
                        required: hasIdNo,
                    }} options={selectOptions} dropdownStyle={{ width: "300px", height: "232px" }} />
                </Col>

                <Col xs={12} sm={12} md={12}>
                    <MyInput formItem={{
                        label: "ID No",
                        name: "idNo",
                        isEnableBlur: false
                    }} />
                    <Required error={error} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24}>
                    <MyInput formItem={{
                        label: "Issue Place",
                        name: "idIssuer",
                        required: hasIdNo,
                    }} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={12}>
                    <MyDatePicker formItem={{
                        label: "Issue Date",
                        name: "idDate",
                        required: hasIdNo,
                    }} />
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <MyDatePicker formItem={{
                        label: "Expiry Date",
                        name: "idExpiryDate",
                        required: hasIdNo,
                    }} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24}>

                    <Row gutter={16}>
                        <Col xs={12} sm={12} md={12}>
                            <FileUpload formItem={{
                                name: "imgFront",
                                label: "ID Image"
                            }} />
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <FileUpload formItem={{
                                name: "imgBack",
                                label: "ID Image"
                            }} />

                        </Col>
                    </Row>
                </Col>
            </Row>
        </MyCard>
    )
}

export default DocumentInformation