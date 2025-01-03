import { FormInstance, SelectProps } from "antd";
import { DataType } from "../tables/TableType";

export interface AdvancedSearchProps {
    open: boolean;
    onClose: () => void;
    onFinish: (values: DataType) => void
}

export interface LocationOption {
    value: string;
    label: string;
}
export interface SearchFormProps {
    form: FormInstance;
    onFinish: (values: DataType) => void;
    options: Array<{ value: string; label: string }>;
    children: React.ReactElement
}
export interface AdvancedFormProps  {
    form: FormInstance;
    onFinish: (values: DataType) => void;
}

export interface LocationSelectProp extends Omit<SelectProps, 'options'> {
    url: string | null;
    onChange?: (value: any) => void;
}
export interface MySelectProps extends SelectProps {
    options?: Array<{ value: string; label: string }>;
}