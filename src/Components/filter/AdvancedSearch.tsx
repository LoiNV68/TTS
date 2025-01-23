import React from 'react';
import { Drawer } from 'antd';
import DrawerHeader from './DrawerHeader';
import "./styles.scss";
import DrawerFooter from './DrawerFooter';
import { AdvancedSearchProps } from '../../interfaces/search/AdvancedSearch';

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ form, open, onClose, children }) => {
    const handleReset = () => {
        form.resetFields();
    };

    return (
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
            {children}
        </Drawer>
    );
};

export default AdvancedSearch;