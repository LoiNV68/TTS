import React from 'react'
import MyCard from './MyCard'
import { Col } from 'antd'
import { MyTextArea } from '../../components/input'

const Remark: React.FC = () => {
    return (
        <MyCard header='Remark'>
            <Col >
                <MyTextArea formItem={{
                    hideLabel: true,
                    name: "remark",
                }} rows={4} maxLength={500} />
            </Col>
        </MyCard>
    )
}

export default Remark