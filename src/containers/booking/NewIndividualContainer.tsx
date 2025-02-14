import React from 'react'
import "./styles.scss"
import { Col, Form, Row } from 'antd'
import { FooterPage } from '../../components/core'
import GeneralInformation from './GeneralInformation'
import DetailInformation from './DetailInformation'
import BookingInformation from './BookingInformation'
import RateInformation from './RateInformation'
import SpecialService from './SpecialService'

const NewIndividualContainer = () => {
    return (
        <>
            <div className='page-content'>
                <Row gutter={16}>
                    <Col span={19}>
                        <div className="left-column">
                            <Form>
                                <GeneralInformation />
                            </Form>
                            <BookingInformation />
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="right-column">
                            <DetailInformation />
                        </div>
                    </Col>
                </Row>
            </div>
            <FooterPage />
        </>
    )
}

export default NewIndividualContainer
