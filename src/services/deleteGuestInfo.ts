import axios from 'axios';
import { API_BOOKING_ENDPOINTS } from '../api/apiConfig';

// Hàm gửi yêu cầu cập nhật dữ liệu
const deleteGuestInfo = async (id: string) => {
    try {
        const response = await axios.delete(API_BOOKING_ENDPOINTS.deleteGuestInfo(id));
        return response.data;
    } catch (error: any) {
        console.error('Error delete guest info:', error);
        return Promise.resolve(error.response?.data || error.message);
    }
};


export default deleteGuestInfo;
