import axios from 'axios';
import { API_BOOKING_ENDPOINTS } from '../api/apiConfig';

// Hàm gửi yêu cầu cập nhật dữ liệu
const findGuestInfo = async (id: string) => {
    try {
        const response = await axios.get(API_BOOKING_ENDPOINTS.findGuestInfo(id));
        return response.data;
    } catch (error: any) {
        console.error('Error find guest info:', error);
        return Promise.resolve(error.response?.data || error.message);
    }
};


export default findGuestInfo;
