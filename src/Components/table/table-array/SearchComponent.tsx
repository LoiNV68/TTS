import React, { useState } from "react";
import { Input } from "antd";

// Định nghĩa kiểu dữ liệu cho mỗi item trong data
interface FormValues {
    firstName: string;
    lastName: string;
    address: string;
    tags: string[];
}

interface SearchComponentProps {
    data: FormValues[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ data }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredData, setFilteredData] = useState<FormValues[]>(data);

    const handleSearch = (value: string) => {
        if (value) {
            setFilteredData(
                data.filter(
                    (item) =>
                        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
                        item.lastName.toLowerCase().includes(value.toLowerCase()) ||
                        item.address.toLowerCase().includes(value.toLowerCase()) ||
                        item.tags.some((tag) =>
                            tag.toLowerCase().includes(value.toLowerCase())
                        )
                )
            );
        } else {
            setFilteredData(data);
        }
    };

    return (
        <Input.Search
            placeholder="Tìm kiếm"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: "100%" }}
        />
    );
};

export default SearchComponent;