import { useState, useCallback } from 'react';
import { Form } from 'antd';

const useFormValidation = (form: any) => {
    const [formState, setFormState] = useState({
        phoneError: false,
        idNoError: false,
        hasInteracted: false,
    });

    const phone = Form.useWatch('phone', form);
    const idNo = Form.useWatch('idNo', form);

    const updateErrors = useCallback(() => {
        const bothEmpty = !phone && !idNo;
        setFormState((prev) => ({
            ...prev,
            phoneError: bothEmpty,
            idNoError: bothEmpty,
        }));
    }, [phone, idNo]);

    const handleFieldsChange = () => {
        if (!formState.hasInteracted) {
            setFormState((prev) => ({
                ...prev,
                hasInteracted: true,
            }));
        }
        updateErrors();
    };

    return {
        formState,
        handleFieldsChange,
        updateErrors,
        phone,
        idNo,
    };
};

export default useFormValidation;
