// hooks/useGuestForm.ts
import { Form, message } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { createGuestInfo, updateGuestInfo } from '../services';
import { DataType } from '../interfaces/tables/TableType';

dayjs.extend(customParseFormat); // Bắt buộc để parse định dạng tùy chỉnh

interface FormState {
    phoneError: boolean;
    idNoError: boolean;
    hasInteracted: boolean;
}

interface UseGuestFormProps {
    initialData?: DataType;
    onSuccess?: () => void;
}

interface UseGuestFormResult {
    form: ReturnType<typeof Form.useForm>[0];
    formState: FormState;
    handleFieldsChange: () => void;
    handleSubmit: () => Promise<boolean>;
    resetForm: () => void;
}

export const useGuestForm = ({ initialData, onSuccess }: UseGuestFormProps = {}): UseGuestFormResult => {
    const [form] = Form.useForm();
    const [formState, setFormState] = useState<FormState>({
        phoneError: false,
        idNoError: false,
        hasInteracted: false
    });

    const phone = Form.useWatch('phone', form);
    const idNo = Form.useWatch('idNo', form);

    const resetForm = useCallback(() => {
        setFormState({
            phoneError: false,
            idNoError: false,
            hasInteracted: false
        });
        form.resetFields();

        console.log("init data", initialData);
        if (initialData) {
            const formattedData = {
                ...initialData,
                birthdate: initialData.birthdate ? dayjs(initialData.birthdate, 'YYYY-MM-DD') : '',
                idDate: initialData.idDate ? dayjs(initialData.idDate, 'YYYY-MM-DD') : '',
                idExpiryDate: initialData.idExpiryDate ? dayjs(initialData.idExpiryDate, 'YYYY-MM-DD') : '',
            };
            form.setFieldsValue(formattedData);
            console.log("format data", formattedData);

        }
    }, [form, initialData]);

    const updateErrors = useCallback(() => {
        const bothEmpty = !phone && !idNo;
        setFormState(prev => ({
            ...prev,
            phoneError: bothEmpty,
            idNoError: bothEmpty
        }));
    }, [phone, idNo]);

    useEffect(() => {
        if (formState.hasInteracted) {
            updateErrors();
        }
    }, [formState.hasInteracted, updateErrors]);

    const handleFieldsChange = () => {
        if (!formState.hasInteracted) {
            setFormState(prev => ({
                ...prev,
                hasInteracted: true
            }));
        }
        updateErrors();
    };

    const handleSubmit = async (): Promise<boolean> => {
        try {
            await form.validateFields();

            if (!phone && !idNo) {
                setFormState(prev => ({
                    ...prev,
                    phoneError: true,
                    idNoError: true,
                    hasInteracted: true
                }));
                return false;
            }

            const values = form.getFieldsValue();
            const formattedValues = {
                ...initialData,
                ...values,
            };
            console.log("format value", formattedValues);

            const response = initialData
                ? await updateGuestInfo(formattedValues)
                : await createGuestInfo(formattedValues);

            if (response.isSuccess) {
                message.success(`Guest info ${initialData ? 'updated' : 'created'} successfully`);
                onSuccess?.();
                return true;
            } else {
                message.error(response.errors[0].message);
                return false;
            }
        } catch (error) {
            console.error('Validation failed:', error);
            if (!phone && !idNo) {
                setFormState(prev => ({
                    ...prev,
                    phoneError: true,
                    idNoError: true,
                    hasInteracted: true
                }));
            }
            return false;
        }
    };



    return {
        form,
        formState,
        handleFieldsChange,
        handleSubmit,
        resetForm
    };
};