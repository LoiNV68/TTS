import React, { Fragment } from 'react';
import { Drawer } from 'antd';
import DrawerHeader from './DrawerHeader';
import "./styles.scss";
import DrawerFooter from './DrawerFooter';
import AdvancedForm from '../form/AdvancedForm';
import { AdvancedSearchProps } from '../../interfaces/search/AdvancedSearch';

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ form, open, onClose, onFinish }) => {
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