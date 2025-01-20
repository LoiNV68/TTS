import dayjs from "dayjs";
import { ApiDataItem } from "../interfaces/tables/TableType";

const dynamicMappingConfig: { [key: string]: (item: ApiDataItem) => any } = {
    key: (item) => item.id,
    code: (item) => item.guestNo,
    name: (item) => item.fullName,
    gender: (item) => (item.gender === 'F' ? 'Female' : 'Male'),
    birthdate: (item) => (item.birthdate ? dayjs(item.birthdate).format('DD/MM/YYYY') : ''),
    phone: (item) => item.phone,
    email: (item) => item.email || '',
    fullAddress: (item) => item.fullAddress || '',
    status: (item) => (item.status === 'A' ? 'Active' : 'Inactive'),
    idNo: (item) => item.idNo || '',

};
export default dynamicMappingConfig;