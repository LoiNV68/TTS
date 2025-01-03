import React, { Fragment } from 'react';
import { Form, Drawer } from 'antd';
import DrawerHeader from './DrawerHeader';
import "./styles.scss";
import DrawerFooter from './DrawerFooter';
import AdvancedForm from './AdvancedForm';
import { AdvancedSearchProps } from '../../interfaces/search/AdvancedSearch';

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ open, onClose, onFinish }) => {
    const [form] = Form.useForm();

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <Fragment>
            <Drawer
                width={400}
                title={<DrawerHeader onClose={onClose} />}
                open={open}
                onClose={onClose}
                closeIcon={false}
                footer={
                    <DrawerFooter form={form} handleReset={handleReset} onClose={onClose} />
                }
            >
                <AdvancedForm form={form} onFinish={onFinish} />
            </Drawer>
        </Fragment>
    );
};

export default AdvancedSearch;