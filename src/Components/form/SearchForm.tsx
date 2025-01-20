import { Col, Form, Row } from 'antd'
import { MyInput, MySelect } from '../input'
import { SearchFormProps } from '../../interfaces/search/AdvancedSearch'

import { useContext } from 'react';
import FormContext from './FormContext';

const SearchForm: React.FC<Omit<SearchFormProps, 'form'>> = ({ layout, onFinish, options, children }) => {
    const form = useContext(FormContext); // Lấy form từ context

    if (!form) {
        return null; // Trường hợp không có context
    }

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
            <Row gutter={[16, 0]}>
                {/* Các trường form */}
                <Col span={8} {...layout}>
                    <MyInput formItem={{
                        label: "Code",
                        name: "code",
                    }} />
                </Col>
                <Col span={8} {...layout}>
                    <MyInput formItem={{
                        name: "name",
                        label: "Name",
                    }} />
                </Col>
                <Col span={8} {...layout}>
                    <MyInput formItem={{
                        name: "idNo",
                        label: "ID No",
                    }} />
                </Col>
                <Col span={8} {...layout}>
                    <MyInput formItem={{
                        label: "Phone",
                        name: "phone",
                    }} />
                </Col>
                <Col span={8} {...layout}>
                    <MyInput formItem={{
                        name: "email",
                        label: "Email",
                    }} />
                </Col>
                <Col span={8} {...layout}>
                    <MySelect formItem={{
                        label: "Status",
                        name: "status",
                    }} options={options} />
                </Col>
            </Row>
            {children}
        </Form>
    );
};

export default SearchForm;
