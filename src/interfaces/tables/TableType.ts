import { TablePaginationConfig } from "antd";


export interface MyTableProps {
    data: any[];
    pagination?: TablePaginationConfig;
    handlePaginationChange?: (page: number, pageSize: number) => void;
}

export interface DataType {
    key: string;
    code: string;
    name: string;
    gender: string;
    birthday: string;
    phone: string;
    email: string;
    fullAddress: string;
    status: string;
    idNo: string;
    idType?: string;
    idIssuer?: string;
    idDate?: string;
    idExpiryDate?: string;
    createdDate?: string;
    modifiedDate?: string;
    modifiedBy?: string;
}


export interface ApiResponse<T = any> {
    data: T;
    errors: null | any;
    isSuccess: boolean;
    pagination?: {
        firstRowOnPage: number;
        lastRowOnPage: number;
        pageCount: number;
        pageCurrent: number;
        pageSize: number;
        rowCount: number;
    }
}

export interface ApiDataItem { [key: string]: any; }

export interface TableCustomProps {
    data: DataType[];
}

export interface PaginationCustomProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
}

export interface ContentFooterProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
}
export interface SearchFilter {
    code?: string;
    name?: string;
    phone?: string;
    email?: string;
    status?: string;
    idNo?: string;
    // advanced
    country?: string;
    provinceCode?: string;
    districtCode?: string;
    wardCode?: string;
    fullAddress?: string;
    createdBy?: string;
    createdDate?: string;
    modifiedBy?: string;
    modifiedDate?: string;

}

export interface DataTypeExport<T> {
    [key: string]: T;
}


