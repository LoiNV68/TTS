import React from 'react'
import { MyCard, MyCardContent } from '../../components/core'
import { Col, Row } from 'antd'
import { MyDateRangePicker, MyInput, MyInputNumber } from '../../components/input'
import { SearchIcon } from '../../components/icons'
import { CustomButton } from '../../components/button'
import { SmileOutlined, UserOutlined } from '@ant-design/icons'

const GeneralInformation = () => {
    return (
        <MyCard header='GENERAL INFORMATION' >
            <Row gutter={16}>
                <Col span={12}>
                    <MyCardContent header='Guest information' classType='guest-info-container'>
                        <Row gutter={16} align="bottom">
                            <Col span={12}>
                                <MyInput
                                    formItem={{
                                        label: 'Guest Name',
                                        name: 'name',
                                        required: true
                                    }}
                                    suffix={<SearchIcon stroke='black' />}
                                />
                            </Col>
                            <Col span={12}>
                                <MyInput
                                    formItem={{
                                        label: 'Phone',
                                        name: 'phone',
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row justify="space-between" align="middle" style={{ marginTop: "10px" }}>
                            <Col>
                                <label style={{ fontWeight: 500, color: "rgb(0, 0, 0)" }}>
                                    Room Sharing
                                </label>
                            </Col>
                            <Col>
                                <CustomButton text="Detail" detail />
                            </Col>
                        </Row>
                    </MyCardContent>
                </Col>
                <Col span={12}>
                    <MyCardContent header='Stay information' classType='stay-info-container'>
                        <Row gutter={16}>
                            <Col span={12}>
                                <MyInputNumber formItem={{
                                    label: "Adult(s)",
                                    name: "adults",
                                    required: false,
                                }}
                                    defaultValue={1}
                                    min={1}
                                    prefix={<UserOutlined style={{ color: "black" }} />}
                                />
                            </Col>
                            <Col span={12}>
                                <MyInputNumber formItem={{
                                    label: "Child(s)",
                                    name: "child",
                                    required: false,
                                }}
                                    defaultValue={0}
                                    min={0}
                                    prefix={<SmileOutlined style={{ color: "black" }} />}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <MyDateRangePicker formItem={{
                                label: "Arrival Date - Departure Date",
                                name: "departure",
                                required: true,
                            }} style={{ width: "100%", display: "flex", paddingRight: "120px" }} />
                        </Row>
                    </MyCardContent>
                </Col>
            </Row>
        </MyCard>
    )
}

export default GeneralInformation