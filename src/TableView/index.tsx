import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import TableComponent from "./TableComponent";
import FormModal from "./FormModal";

interface FormValues {
    key: string;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags?: string[];
}

const TableView: React.FC = () => {
    const [data, setData] = useState<FormValues[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingItem, setEditingItem] = useState<FormValues | null>(null);
    const [form] = Form.useForm();
    const [filteredData, setFilteredData] = useState<FormValues[]>([]);

    const showAddModal = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleSave = () => {
        form
            .validateFields()
            .then((values) => {
                if (editingItem) {
                    setData((prevData) =>
                        prevData.map((item) =>
                            item.key === editingItem.key
                                ? {
                                    ...editingItem,
                                    ...values,
                                    tags: values.tags ? values.tags.split(",").filter(Boolean) : [],
                                }
                                : item
                        )
                    );
                } else {
                    setData((prevData) => [
                        ...prevData,
                        {
                            ...values,
                            key: Date.now().toString(),
                            tags: values.tags ? values.tags.split(",").filter(Boolean) : [],
                        },
                    ]);
                }

                setIsModalOpen(false);
                form.resetFields();
            })
            .catch((errorInfo) => {
                console.log("Validation failed:", errorInfo);
            });
    };

    const handleEdit = (record: FormValues) => {
        setEditingItem(record);
        const tagString = Array.isArray(record.tags) ? record.tags.join(",") : "";
        form.setFieldsValue({ ...record, tags: tagString });
        setIsModalOpen(true);
    };

    const handleDelete = (key: string) => {
        setData((prevData) => prevData.filter((item) => item.key !== key));
    };

    const handleSearch = (value: string) => {
        if (value) {
            setFilteredData(
                data.filter(
                    (item) =>
                        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
                        item.lastName.toLowerCase().includes(value.toLowerCase()) ||
                        item.address.toLowerCase().includes(value.toLowerCase()) ||
                        (item.tags &&
                            item.tags.some((tag) =>
                                tag.toLowerCase().includes(value.toLowerCase())
                            ))
                )
            );
        } else {
            setFilteredData(data);
        }
    };

    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Form.Item
                        style={{
                            display: "inline-block",
                            width: "calc(100% - 110px)",
                            marginRight: 8,
                        }}
                    >
                        <Input.Search
                            placeholder="Tìm kiếm"
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                    <Button type="primary" onClick={showAddModal}>
                        Thêm
                    </Button>
                </div>
                <TableComponent
                    data={filteredData.length > 0 ? filteredData : data}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
            <FormModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleSave={handleSave}
                form={form}
                editingItem={editingItem}
            />
        </>
    );
};

export default TableView;