import axios from 'axios';
import { API_BOOKING_ENDPOINTS } from '../api/apiConfig';
import { DataType } from '../interfaces/tables/TableType';

// Hàm gửi yêu cầu tạo dữ liệu mới
const createGuestInfo = async (data: DataType) => {
    try {
        const response = await axios.post(API_BOOKING_ENDPOINTS.createGuestInfo, data);
        return response.data; // trả về kết quả nhận được từ API
    } catch (error: any) {
        return Promise.resolve(error.response.data)
    }
};

export default createGuestInfo;
