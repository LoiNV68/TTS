import React from 'react';
import { Modal, Form, Input, Select, DatePicker, Radio, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const NewGuestModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [form] = Form.useForm();

  const uploadProps: UploadProps = {
    maxCount: 1,
    accept: "image/svg+xml,image/png,image/jpeg"
  };

  return (
    <Modal
      title="New Guest Info"
      open={open}
      onCancel={onClose}
      width={800}
      footer={[
        <Button key="close" onClick={onClose}>Close</Button>,
        <Button key="save" type="primary" className="bg-pink-500">Save</Button>
      ]}
      bodyStyle={{ maxHeight: '70vh', overflow: 'auto' }}
    >
      <Form form={form} layout="vertical">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">PERSONAL INFORMATION</h3>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Salutation">
                <Select placeholder="Select" />
              </Form.Item>
              <Form.Item 
                label={<span>Guest Name <span className="text-red-500">*</span></span>}
                required
                help="Guest Name is required"
              >
                <Input placeholder="Enter" />
              </Form.Item>
            </div>

            <Form.Item label="Gender">
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Phone" extra="Phone or ID No is required">
                <Input placeholder="Enter" />
              </Form.Item>
              <Form.Item label="Email">
                <Input placeholder="Enter" />
              </Form.Item>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">DOCUMENT INFORMATION</h3>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="ID Type">
                <Select placeholder="Select" />
              </Form.Item>
              <Form.Item label="ID No" extra="Phone or ID No is required">
                <Input placeholder="Enter" />
              </Form.Item>
            </div>

            <Form.Item label="Issue Place">
              <Input placeholder="Enter" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Issue Date">
                <DatePicker className="w-full" placeholder="Select" />
              </Form.Item>
              <Form.Item label="Expiry Date">
                <DatePicker className="w-full" placeholder="Select" />
              </Form.Item>
            </div>

            <Form.Item label="ID Image">
              <div className="grid grid-cols-2 gap-4">
                <Upload.Dragger {...uploadProps}>
                  <p className="text-pink-500">Upload Front Side</p>
                  <p className="text-gray-400 text-sm">SVG, PNG, JPG, file max 5MB</p>
                </Upload.Dragger>
                <Upload.Dragger {...uploadProps}>
                  <p className="text-pink-500">Upload Back Side</p>
                  <p className="text-gray-400 text-sm">SVG, PNG, JPG, file max 5MB</p>
                </Upload.Dragger>
              </div>
            </Form.Item>
          </div>

          <div>
            <h3 className="font-medium mb-4">ADDRESS INFORMATION</h3>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Country">
                <Select placeholder="Select" />
              </Form.Item>
              <Form.Item label="Province/City">
                <Select placeholder="Select" />
              </Form.Item>
              <Form.Item label="District">
                <Select placeholder="Select" />
              </Form.Item>
              <Form.Item label="Commune/ward">
                <Select placeholder="Select" />
              </Form.Item>
            </div>
            <Form.Item label="Detail Address">
              <Input placeholder="Enter" />
            </Form.Item>
            <Form.Item label="Full Address">
              <Input placeholder="Enter" />
            </Form.Item>
          </div>

          <Form.Item label="REMARK">
            <Input.TextArea rows={4} placeholder="Enter" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default NewGuestModal;