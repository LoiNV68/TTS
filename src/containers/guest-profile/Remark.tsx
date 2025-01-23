import React from 'react'
import { Col } from 'antd'
import { MyTextArea } from '../../components/input'
import { MyCardContent } from '../../components/core'

const Remark: React.FC = () => {
    return (
        <MyCardContent header='Remark'>
            <Col >
                <MyTextArea formItem={{
                    hideLabel: true,
                    name: "remark",
                }} rows={4} maxLength={500} />
            </Col>
        </MyCardContent>
    )
}

export default Remark