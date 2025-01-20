import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";
import { LocationSelectProp } from "../../interfaces/search/AdvancedSearch";
import { MySelect } from "../input";

const LocationSelect: React.FC<LocationSelectProp> = ({ name, label, url, onChange, ...props }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOptions = async () => {
            if (!url) {
                setOptions([]);
                return;
            }


            setLoading(true);
            try {
                const response = await axios.get(url);

                const transformedOptions = response.data.data.map((item: any) => ({
                    value: item.code,
                    label: item.name,
                }));
                setOptions(transformedOptions);


            } catch (error) {
                message.error("Failed to fetch data. Please try again.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOptions();
    }, [url]);
    return (
        <MySelect
            formItem={
                {
                    label: label,
                    name: name,
                }
            }
            options={options}
            loading={loading}
            onChange={onChange}
            {...props}
        />
    );
};

export default LocationSelect;