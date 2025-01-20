// components/GuestModal.tsx
import React, { useEffect } from 'react';
import { Modal, Form, Row, Col } from 'antd';
import { CustomButton } from '../../components/button';
import './styles.scss';
import PersonInformation from './PersonInformation';
import AddressInformation from './AddressInformation';
import DocumentInformation from './DocumentInformation';
import Remark from './Remark';
import { useGuestForm } from '../../hooks';
import { DataType } from '../../interfaces/tables/TableType';

interface GuestModalProps {
  open: boolean;
  onClose: () => void;
  initialData?: DataType;
}

const GuestModal: React.FC<GuestModalProps> = ({ open, onClose, initialData }) => {
  const {
    form,
    formState,
    handleFieldsChange,
    handleSubmit,
    resetForm
  } = useGuestForm({
    initialData,
    onSuccess: onClose
  });

  useEffect(() => {
    if (open) {
      resetForm();
    }
  }, [open, resetForm]);

  const handleSave = async () => {
    const success = await handleSubmit();
    if (success) {
      onClose();
    }
  };

  const columnStyle = {
    paddingLeft: '8px',
    paddingRight: '8px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px'
  };

  return (
    <Modal
      className="my-modal"
      title={initialData ? "Edit Guest Info" : "New Guest Info"}
      open={open}
      onCancel={onClose}
      centered
      width={880}
      footer={[
        <CustomButton
          key="close"
          text="Close"
          outline
          onClick={onClose}
        />,
        <CustomButton
          key="save"
          text="Save"
          primary
          htmlType="submit"
          onClick={handleSave}
        />,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFieldsChange={handleFieldsChange}
      >
        <Row style={{ margin: '0 -8px' }}>
          <Col style={columnStyle} span={12}>
            <PersonInformation error={formState.phoneError} />
            <AddressInformation form={form} />
          </Col>
          <Col style={columnStyle} span={12}>
            <DocumentInformation
              error={formState.idNoError}
              hasIdNo={Boolean(Form.useWatch('idNo', form))}
            />
            <Remark />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default GuestModal;