import { Checkbox, CheckboxProps, Dropdown, MenuProps } from 'antd';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { MyInput } from '../input';
import { SearchIcon } from '../icons';
import "./Button.scss";

const SelectDropDown: React.FC = () => {

    const initialOptions = ['MDL1', 'Mandala Hotel Phú Yên', 'Hotel MDL', 'Hotel MDLT', 'Mandala Hotel Kim Bôi', 'Mandala Hotel Mũi Né',
        'Mandala Hotel Bắc Ninh', 'Mandala Hotel Hải Dương', 'Mandala Hotel Bắc Giang'];

    const [plainOptions, setPlainOptions] = useState(initialOptions);
    const [checkedList, setCheckedList] = useState<string[]>([]);
    const [visible, setVisible] = useState(false);

    const checkAll = checkedList.length === plainOptions.length;

    // set lại list khi checked item
    const onChange = (list: string[]) => {
        setCheckedList(list);
    };
    // set lại list khi checked all
    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        e.stopPropagation();
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    // set lại list khi checked item
    const handleSelectAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCheckedList(checkAll ? [] : plainOptions);
    };

    const handleItemClick = (option: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const newCheckedList = checkedList.includes(option)
            ? checkedList.filter(item => item !== option)
            : [...checkedList, option];
        setCheckedList(newCheckedList);
    };
    const menuItems: MenuProps["items"] = [
        {
            key: "input-search",
            label: (
                <div><MyInput formItem={{ name: "search", isShowLabel: false }} placeholder='Search' suffix={<SearchIcon stroke="black" />} /></div>
            ),
        },
        {
            key: "check-all",
            label: (
                <div
                    className='menu-item'
                    style={{
                        background: "inherit",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 18px 0 8px",
                        cursor: 'pointer'
                    }}
                    onClick={handleSelectAll}
                >
                    <span style={{ flex: 1 }}>Select All</span>
                    <Checkbox onChange={onCheckAllChange} checked={checkAll} />
                </div>
            ),
        },
        {
            type: "divider",
        },
        {
            key: "check-list",
            label: (
                <div className='menu-container' >
                    <Checkbox.Group
                        style={{ display: "flex", flexDirection: "column" }}
                        value={checkedList}
                        onChange={onChange}
                    >
                        {plainOptions.map(option => (
                            <div key={option} className="menu-item" onClick={(e) => handleItemClick(option, e)}>
                                <span className="checkbox-label">{option}</span>
                                <Checkbox value={option} />
                            </div>
                        ))}
                    </Checkbox.Group>
                </div>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            placement="bottomLeft"
            open={visible}
            onOpenChange={(open) => {
                if (!open) {
                    // Luôn lấy từ danh sách gốc để tránh mất item
                    setPlainOptions(() => {
                        // Lọc từ initialOptions để đảm bảo không bị mất item
                        const selected = initialOptions.filter(item => checkedList.includes(item));
                        const unselected = initialOptions.filter(item => !checkedList.includes(item));
                        return [...selected, ...unselected];
                    });
                } else {
                    setTimeout(() => {
                        const menuElement = document.querySelector('.ant-dropdown-menu-item');
                        if (menuElement) {
                            menuElement.scrollTop = 0;
                        }
                    }, 0);
                }
                setVisible(open);
            }}


        >
            <div style={{ minWidth: "110px" }}>
                <CustomButton
                    text="Hotel: "
                    label={checkedList.length > 0 ? `${checkedList.length} selected` : "Select"}
                    iconName="down"
                />
            </div>
        </Dropdown>
    );
};

export default SelectDropDown;
