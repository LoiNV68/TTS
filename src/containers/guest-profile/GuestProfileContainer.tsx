import React, { Fragment, useEffect, useState } from 'react';
import { message } from 'antd';
import { TablePaginationConfig } from 'antd/es/table';
import { LoadingOverlay, ShareLayout } from '../../components/core';
import MyFilter from '../../components/filter/MyFilter';
import { ApiDataItem, DataType, SearchFilter } from '../../interfaces/tables/TableType';
import { MyTable } from '../../components/table';
import { searchGuestInfo } from '../../services';
import { dynamicMappingConfig } from '../../config';
import { formatApiDataFlexible } from '../../components/utils';
import exportToExcel from '../../components/utils/exportUtils';


const GuestProfileContainer: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [dataExport, setDataExport] = useState<ApiDataItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchFilters, setSearchFilters] = useState<SearchFilter>({});
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 15,
        total: 0,
    });

    const fetchData = async (page: number, pageSize: number, filters: SearchFilter = {}) => {
        setLoading(true);
        try {
            const response = await searchGuestInfo(page, pageSize, filters);
            const formattedData = formatApiDataFlexible<DataType>(response.data, dynamicMappingConfig);
            setDataExport(response.data)
            setData(formattedData);
            setPagination((prev) => ({
                ...prev,
                total: response.pagination?.rowCount,
                current: page,
                pageSize,
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            message.error('Failed to fetch guest profiles.container');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(1, 15);
    }, []);

    const handleSearch = (values: SearchFilter) => {
        setSearchFilters(values);
        fetchData(1, pagination.pageSize!, values);
    };

    const handlePaginationChange = (page: number, pageSize: number) => {
        fetchData(page, pageSize, searchFilters);
    };

    return (
        <Fragment>
            <ShareLayout type="filter">
                <MyFilter onSearch={handleSearch} />
            </ShareLayout>
            <ShareLayout showHeader={!loading} buttons={{ export: true, add: true }} type={loading ? undefined : "content"} handleExport={() => exportToExcel(dataExport)}>
                <LoadingOverlay visible={loading} />
                <MyTable
                    data={data}
                    pagination={pagination}
                    handlePaginationChange={handlePaginationChange}
                />
              
            </ShareLayout>
        </Fragment>
    );
};

export default GuestProfileContainer;
