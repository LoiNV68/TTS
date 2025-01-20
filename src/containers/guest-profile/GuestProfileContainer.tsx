import React, { Fragment, useEffect, useState } from 'react';
import { message } from 'antd';
import { TablePaginationConfig } from 'antd/es/table';
import { LoadingOverlay, ShareLayout } from '../../components/core';
import MyFilter from '../../components/filter/MyFilter';
import { ApiDataItem, DataType, SearchFilter } from '../../interfaces/tables/TableType';
import { MyTable } from '../../components/table';
import { findGuestInfo, searchGuestInfo } from '../../services';
import { dynamicMappingConfig } from '../../config';
import { formatApiDataFlexible } from '../../components/utils';
import exportToExcel from '../../components/utils/exportUtils';
import GuestModal from './GuestInfoForm';
import DeleteModal from './DeleteModal';
import deleteGuestInfo from '../../services/deleteGuestInfo';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any | undefined>(undefined);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
    const [deletingRecord, setDeletingRecord] = useState<DataType | null>(null);

    const openModal = () => setIsModalOpen(true);
    const openDeleteModal = (record: DataType) => {
        setIsDeleteModalOpen(true);
        setDeletingRecord(record);
        console.log("key",record.key);
    }


    const closeModal = () => {
        setIsModalOpen(false);
        setEditingRecord(undefined);
        fetchData(pagination.current!, pagination.pageSize!, searchFilters);
    };

    const fetchData = async (page: number, pageSize: number, filters: SearchFilter = {}) => {
        setLoading(true);
        try {
            const response = await searchGuestInfo(page, pageSize, filters);
            const formattedData = formatApiDataFlexible<DataType>(response.data, dynamicMappingConfig);
            setDataExport(response.data);
            setData(formattedData);
            setPagination((prev) => ({
                ...prev,
                total: response.pagination?.rowCount,
                current: page,
                pageSize,
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            message.error('Failed to fetch guest profiles');
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

    const handleAdd = () => {
        setEditingRecord(undefined);
        openModal();
    };
    const handleEdit = async (record: DataType) => {
        const data = await findGuestInfo(record.key)
        setEditingRecord(data.data);
        openModal();
    };

    const handleDelete = async () => {
        console.log(deletingRecord?.key);
        if (deletingRecord?.key) {
            const response = await deleteGuestInfo(deletingRecord.key)
            console.log("response", response);
            if (response.isSuccess) {
                message.success('Guest info deleted successfully');
                fetchData(pagination.current!, pagination.pageSize!, searchFilters);
                setIsDeleteModalOpen(false);
            }
        } else {
            console.error('No record to delete');
            message.error('Failed to delete guest info');
            setIsDeleteModalOpen(false);
        }

    };

    const handleCancelDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <Fragment>
            <ShareLayout type="filter">
                <MyFilter onSearch={handleSearch} />
            </ShareLayout>
            <ShareLayout
                showHeader={!loading}
                buttons={{ export: true, add: true }}
                type={loading ? undefined : "content"}
                handleExport={() => exportToExcel(dataExport)}
                handleOpenModal={handleAdd}
            >
                <LoadingOverlay visible={loading} />
                <MyTable
                    data={data}
                    pagination={pagination}
                    handlePaginationChange={handlePaginationChange}
                    handleEdit={handleEdit}
                    handleDelete={openDeleteModal}
                />
                <GuestModal
                    open={isModalOpen}
                    onClose={closeModal}
                    initialData={editingRecord}
                />
                <DeleteModal isOpen={isDeleteModalOpen} onConfirm={handleDelete} onCancel={handleCancelDeleteModal} />
            </ShareLayout>
        </Fragment>
    );
};

export default GuestProfileContainer;