import { useState } from "react";
import SidebarIcon from "../Icons/SidebarIcon.tsx";
import { Button, Menu } from "antd";
import {
  DashboardOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { ItemType } from "antd/es/menu/interface";
import "./Layout.scss";

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: ItemType[] = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <span>Dashboard</span>,
    },
    {
      key: "2",
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
      label: (
        <span className="item-title">DAILY OPERATION</span>
      ),
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label: "My Allotment",
    },
    {
      key: "5",
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
      label: (
        <span className="item-title">SETTING</span>
      ),
    },
    {
      key: "6",
      icon: <UserOutlined />,
      label: "User Management",
    },
    {
      key: "6-1",
      icon: <SettingOutlined />,
      label: "Master Data",
      children: [
        { key: "6-2", label: "Data 1" },
        { key: "6-3", label: "Data 2" },
        { key: "6-4", label: "Data 3" },
        { key: "6-5", label: "Data 4" },
      ],
    },
  ];


  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={`bg-white border-r border-[#D6D3D1] ${collapsed ? "collapsed" : ""}`}
      width={199.2}
      style={{ height: "100%" }}
    >
      <div className="flex items-center border-b border-[#D6D3D1] h-[60px] relative">
        <div className="flex items-center justify-center w-full pl-4 pr-4">
          {collapsed ? (
            <img
              src="/logo/logoSmall.png"
              alt="Lotus Xpert"
              className="h-7 w-7"
            />
          ) : (
            <img src="/logo/logo.png" alt="Lotus Xpert" className="h-8 w-40" />
          )}
        </div>
        <Button
          type="text"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3.5 z-20 text-lg p-0 mr-2"
        >
          <SidebarIcon collapsed={collapsed} />
        </Button>
      </div>

      <div
        className="overflow-y-auto overflow-x-hidden"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="custom-menu"
          items={menuItems}
        />
      </div>
    </Sider>
  );
};

export default AppSider;
