import axios from 'axios';
import { API_BOOKING_ENDPOINTS } from '../api/apiConfig';
import { DataType } from '../interfaces/tables/TableType';

// Hàm gửi yêu cầu cập nhật dữ liệu
const updateGuestInfo = async (data: DataType) => {
    try {
        const response = await axios.put(`${API_BOOKING_ENDPOINTS.updateGuestInfo}`, data);
        return response.data; // Trả về kết quả nhận được từ API
    } catch (error: any) {
        console.error('Error updating guest info:', error);
        return Promise.resolve(error.response.data); // Trả về lỗi từ API nếu có
        
    }
};

export default updateGuestInfo;
