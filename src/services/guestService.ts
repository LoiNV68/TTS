import axios from 'axios';
import { ApiResponse, SearchFilter } from '../interfaces/tables/TableType';
import { createFilterGroup } from '../components/utils/filterUtils';
import { API_BOOKING_ENDPOINTS } from '../api/apiConfig';

 const searchGuestInfo = async (page: number, pageSize: number, filters: SearchFilter = {}) => {
    const requestBody = {
        pagination: { pageIndex: page, pageSize, isAll: false },
        filter: { filterGroup: createFilterGroup(filters), condition: 'And' },
    };

    const { data } = await axios.post<ApiResponse>(API_BOOKING_ENDPOINTS.guestInfoSearch, requestBody);

    return data;
};
export default searchGuestInfo;