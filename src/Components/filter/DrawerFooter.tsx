import React from 'react'
import { CustomButton, ResetButton } from '../button'
import { FormInstance } from 'antd';
interface DrawerFooterProps {
    form: FormInstance;
    handleReset: () => void;
    onClose: () => void;
}
const DrawerFooter: React.FC<DrawerFooterProps> = ({ form, handleReset, onClose }) => {
    const handleSubmitForm = () => {
        onClose();
        form.submit();
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ResetButton onClick={handleReset} />
            <div style={{ display: 'flex', gap: '8px' }}>
                <CustomButton text='Cancel' outline onClick={onClose} />
                <CustomButton text='Apply' primary htmlType="submit" onClick={handleSubmitForm} />
            </div>
        </div>
    )
}

export default DrawerFooter