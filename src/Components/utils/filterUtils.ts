import { SearchFilter } from "../../interfaces/tables/TableType";
import dayjs from 'dayjs';

export const createFilterGroup = (filters: SearchFilter) => {
    const filtersList = [];

    if (filters.code) {
        filtersList.push({
            propertyValue: filters.code,
            propertyName: "guestNo",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.name) {
        filtersList.push({
            propertyValue: filters.name,
            propertyName: "fullName",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.idNo) {
        filtersList.push({
            propertyValue: filters.idNo,
            propertyName: "idNo",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.phone) {
        filtersList.push({
            propertyValue: filters.phone,
            propertyName: "phone",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.email) {
        filtersList.push({
            propertyValue: filters.email,
            propertyName: "email",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.status && filters.status !== '') {
        filtersList.push({
            propertyValue: filters.status,
            propertyName: "status",
            propertyType: "string",
            operator: "Contains"
        });
    }


    // Advanced filters
    if (filters.country) {
        filtersList.push({
            propertyValue: filters.country,
            propertyName: "country",
            propertyType: "string",
            operator: "Contains"
        });
    }
    if (filters.wardCode) {
        filtersList.push({
            propertyValue: filters.wardCode,
            propertyName: "wardCode",
            propertyType: "string",
            operator: "Contains"
        });
    }
    if (filters.fullAddress) {
        filtersList.push({
            propertyValue: filters.fullAddress,
            propertyName: "fullAddress",
            propertyType: "string",
            operator: "Contains"
        });
    }
    if (filters.districtCode) {
        filtersList.push({
            propertyValue: filters.districtCode,
            propertyName: "districtCode",
            propertyType: "string",
            operator: "Contains"
        });
    }
    if (filters.provinceCode) {
        filtersList.push({
            propertyValue: filters.provinceCode,
            propertyName: "provinceCode",
            propertyType: "string",
            operator: "Contains"
        });
    }

    if (filters.createdBy) {
        filtersList.push({
            propertyValue: filters.createdBy,
            propertyName: "createdBy",
            propertyType: "string",
            operator: "Contains"
        });
    }
    if (filters.modifiedDate) {
        const formattedDate = dayjs(filters.modifiedDate).format('YYYY-MM-DD'); 
        filtersList.push({
            propertyValue: formattedDate, 
            propertyName: "modifiedDate",
            propertyType: "date",
            operator: "=="
        });
    }
    if (filters.modifiedBy) {
        filtersList.push({
            propertyValue: filters.modifiedBy,
            propertyName: "modifiedBy",
            propertyType: "string",
            operator: "Contains"
        });
    } if (filters.createdDate) {
        const formattedDate = dayjs(filters.createdDate).format('YYYY-MM-DD');
        filtersList.push({
            propertyValue: formattedDate,
            propertyName: "createdDate",
            propertyType: "date",
            operator: "=="
        });
    }
    if (filtersList.length === 0) {
        return [];
    }

    return [{
        filters: filtersList,
        condition: "And"
    }];
};
