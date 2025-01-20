import { Upload, message } from 'antd';
import { UploadIcon } from '../icons';
import React, { useState } from 'react';
import { MyFormItem } from '../form';
import type { UploadProps, UploadFile, RcFile } from 'antd/es/upload/interface';

interface FormItemProps {
    name: string;
    label?: string;
    required?: boolean;
    rules?: any[];
    form?: any;
    hideLabel?: boolean;
}

interface FileUploadProps extends Omit<UploadProps, 'name'> {
    formItem: FormItemProps;
    uploadText?: string;
    description?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
    formItem,
    uploadText = 'Upload Front Side',
    description = 'SVG, PNG, JPG, file max 5MB',
    onChange,
    ...props
}) => {
    const {
        name,
        label,
        required = false,
        form,
        rules,
        hideLabel = false
    } = formItem;

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPngOrSvg = file.type === 'image/jpeg' || 
                               file.type === 'image/png' || 
                               file.type === 'image/svg+xml';
        if (!isJpgOrPngOrSvg) {
            message.error('You can only upload JPG/PNG/SVG file!');
            return Upload.LIST_IGNORE;
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('Image must smaller than 5MB!');
            return Upload.LIST_IGNORE;
        }
        return false; // Return false to prevent auto upload
    };

    const handleChange: UploadProps['onChange'] = (info) => {
        setFileList(info.fileList);
        // Call parent onChange if provided
        if (onChange) {
            onChange(info);
        }
    };

    const uploadProps = {
        maxCount: 1,
        accept: '.svg,.png,.jpg',
        beforeUpload,
        onChange: handleChange,
        fileList,
        customRequest: ({ file, onSuccess }: any) => {
            // Mock success after 0.5s
            setTimeout(() => {
                onSuccess("ok");
            }, 500);
        },
        ...props
    };

    return (
        <MyFormItem
            name={name}
            label={label}
            required={required}
            rules={rules}
            form={form}
            noStyle={hideLabel}
            valuePropName="fileList"
            initialValue={[]}
            getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                    return e;
                }
                return e?.fileList || [];
            }}
        >
            <Upload
                {...uploadProps}
                listType="picture-card"
                className="custom-upload"
            >
                {fileList.length < 1 && (
                    <div className="flex flex-col items-center justify-center w-full">
                        <UploadIcon />
                        <div className="mt-2 text-[#ED4E6B] font-medium text-center">
                            {uploadText}
                        </div>
                        <span className="text-[#A8A29E] text-[11px] leading-[14px] text-center">
                            {description}
                        </span>
                    </div>
                )}
            </Upload>
        </MyFormItem>
    );
};

export default FileUpload;