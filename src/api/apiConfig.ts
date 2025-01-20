const API_BOOKING = import.meta.env.VITE_API_BOOKING;
const API_COUNTRY = import.meta.env.VITE_API_COUNTRY;

export const API_BOOKING_ENDPOINTS = {
    guestInfoSearch: `${API_BOOKING}/guest-info/search`,
    booking: `${API_BOOKING}/booking/search`,
    createGuestInfo: `${API_BOOKING}/guest-info/create`,
    findGuestInfo: (id: string) => `${API_BOOKING}/guest-info/find/${id}`,
    updateGuestInfo: `${API_BOOKING}/guest-info/update`,
    deleteGuestInfo: (id: string) => `${API_BOOKING}/guest-info/delete/${id}`,
};
export const API_COUNTRY_ENDPOINTS = {
    countries: () => `${API_COUNTRY}country?limit=-1`,
    provinces: (countryCode: string) => `${API_COUNTRY}provinces?fields[]=*.*&filter={"country_code":{"_eq":"${countryCode}"}}&limit=-1`,
    districts: (provinceCode: string) => `${API_COUNTRY}districts?fields[]=*.*&filter={"province_code":{"_eq":"${provinceCode}"}}&limit=-1`,
    wards: (districtCode: string) => `${API_COUNTRY}wards?fields[]=*.*&filter={"district_code":{"_eq":"${districtCode}"}}&limit=-1`,
};