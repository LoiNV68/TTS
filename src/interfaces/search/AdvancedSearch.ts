import { FormInstance, FormItemProps, SelectProps } from "antd";
import { DataType } from "../tables/TableType";

export interface AdvancedSearchProps {
    form: FormInstance;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode
}

export interface LocationOption {
    value: string;
    label: string;
}
export interface SearchFormProps {
    onFinish: (values: DataType) => void;
    options: Array<{ value: string; label: string }>;
    children: React.ReactElement
    layout?: { xs: number; sm: number; md: number; lg: number; xl: number; xxl: number };
}
export interface AdvancedFormProps {
    form: FormInstance;
    onFinish: (values: DataType) => void;
}

export interface LocationSelectProp extends Omit<SelectProps, 'options'> {
    name: string;
    label: string;
    url: string | null;
    onChange?: (value: any) => void;
}
interface IProps extends FormItemProps {
    disabled?: boolean;
    name: string;
    label: string;
    onChange?: (value: string) => void;
    loading?: boolean;
    required?: boolean;
    status?: 'error' | 'warning' | '';
    form?: FormInstance;
    rules?: any[];

}
export interface MySelectProps extends SelectProps {
    formItem: IProps;
    options?: Array<{ value: string; label: string }>;
}