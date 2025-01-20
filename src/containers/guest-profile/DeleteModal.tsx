import React from 'react';
import { Divider, Modal } from 'antd';
import { CustomButton } from '../../components/button';
import { DataType } from '../../interfaces/tables/TableType';
import { DeleteOutlined } from '@ant-design/icons';
import { TrashIcon } from '../../components/icons';

interface DeleteModalProps {
  isOpen: boolean;
  title?: string;
  content?: string;
  onConfirm: (record: DataType) => void;
  onCancel: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      open={isOpen}
      closable={false}
      onCancel={onCancel}
      footer={
        <div className="flex">
          <CustomButton text="Cancel" style={{ width: "50%" }} outline onClick={onCancel} />
          <CustomButton text="Delete" style={{ width: "50%" }} primary onClick={onConfirm} />
        </div>
      }
      centered
    >
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgb(254, 226, 226)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgb(239, 68, 68)',
            }}
          >
            <TrashIcon />
          </div>
        </div>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '500',
            marginTop: '10px',
          }}
        >
          Are you sure to delete the record?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
