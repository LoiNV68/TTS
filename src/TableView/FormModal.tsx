import React from 'react';
import { Modal, Input, Form, FormInstance } from 'antd';
import CustomInputWrapper from './CustomInputWrapper';
interface FormValues {
    key: string;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags?: string[];
}

interface ModalProps {
    isModalOpen: boolean;
    handleCancel: () => void;
    handleSave: () => void;
    form: FormInstance<FormValues>;
    editingItem?: FormValues | null;
}

const FormModal: React.FC<ModalProps> = ({
    isModalOpen,
    handleCancel,
    handleSave,
    form,
    editingItem,
}) => {
    return (
        <Modal
            title={editingItem ? "Sửa thông tin" : "Thêm thông tin"}
            open={isModalOpen}
            onCancel={handleCancel}
            onOk={handleSave}
        >
            <Form form={form} layout="vertical" onFinish={handleSave}>
                <Form.Item
                    name="firstName"
                    label="Họ tên"
                    rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Tên"
                    rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="Tuổi"
                    rules={[{ required: true, message: "Vui lòng nhập tuổi!" }]}
                >
                    <Input
                        type="number"
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value < 0) {
                                e.target.value = "1"; // TypeScript doesn't like direct mutation of DOM elements, so we set the value as a string
                                form.setFieldsValue({ age: 1 });
                            }
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
                >
                    <CustomInputWrapper
                        form={form}
                        name="address"
                        rules={[{ type: "max", value: 10 }]}
                    >
                        <Input />
                    </CustomInputWrapper>
                </Form.Item>
                <Form.Item name="tags" label="Nghề">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};


export default FormModal;