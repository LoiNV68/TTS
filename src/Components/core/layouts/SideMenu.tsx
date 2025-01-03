import React from "react";
import { Menu } from "antd";
import {
    DashboardOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/es/menu/interface";
import { useNavigate, useLocation } from "react-router-dom";

const AppMenu: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Hàm lấy selected key dựa trên pathname
    const getSelectedKey = (pathname: string): string => {
        // Loại bỏ dấu "/" ở đầu pathname
        const path = pathname.substring(1);

        // Nếu pathname rỗng, trả về dashboard
        if (!path) return "dashboard";

        return path;
    };

    const menuItems: ItemType[] = [
        {
            key: "dashboard",
            icon: <DashboardOutlined />,
            label: <span>Dashboard</span>,
        },
        {
            key: "room-availability",
            icon: <CalendarOutlined />,
            label: "Room Availability",
        },
        {
            key: "divider-group-1",
            type: "divider",
        },
        {
            key: "group-1",
            type: "group",
            label: "DAILY OPERATION",
        },
        {
            key: "my-allotment",
            icon: <AppstoreOutlined />,
            label: "My Allotment",
        },
        {
            key: "booking",
            icon: <ScheduleOutlined />,
            label: "Booking",
        },
        {
            key: "divider-group-2",
            type: "divider",
        },
        {
            key: "group-2",
            type: "group",
            label: "SETTING",
        },
        {
            key: "user-management",
            icon: <UserOutlined />,
            label: "User Management",
        },
        {
            key: "6-1",
            icon: <SettingOutlined />,
            label: "Master Data",
            children: [
                { key: "guest-profile", label: "Guest-profile" },
                { key: "6-3", label: "Data 2" },
                { key: "6-4", label: "Data 3" },
                { key: "6-5", label: "Data 4" },
            ],
        },
    ];

    // Xử lý khi click menu item
    const handleMenuClick = ({ key }: { key: string }) => {
        navigate(`/${key}`);
    };

    return (
        <Menu
            mode="inline"
            selectedKeys={[getSelectedKey(location.pathname)]}
            items={menuItems}
            onClick={handleMenuClick}
        />
    );
};

export default AppMenu;