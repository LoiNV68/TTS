import { Col, Form, Row } from 'antd'
import { MyInput, MySelect } from '../input'
import { SearchFormProps } from '../../interfaces/search/AdvancedSearch'

const SearchForm: React.FC<SearchFormProps> = ({ form, onFinish, options , children}) => {
    return (
        <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
            <Row gutter={[16, 0]}>
                <Col span={8}>
                    <Form.Item label="Code" name="code">
                        <MyInput />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Name" name="name">
                        <MyInput />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="ID No" name="idNo">
                        <MyInput />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ pattern: /^[0-9]+$/, message: 'Please enter a valid phone number' }]}
                    >
                        <MyInput />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ type: 'email', message: 'Please enter a valid email' }]}
                    >
                        <MyInput />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Status" name="status">

                        <MySelect options={options} />
                    </Form.Item>
                </Col>
            </Row>
            {children}
        </Form>
    )
}

export default SearchForm