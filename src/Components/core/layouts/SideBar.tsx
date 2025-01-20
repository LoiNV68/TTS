import React, { useState } from "react";
import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import SidebarIcon from "../../icons/SidebarIcon.tsx";
import "./style.scss";
import AppMenu from "./SideMenu.tsx";

const AppSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
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
        <AppMenu />
      </div>
    </Sider>
  );
};

export default AppSider;
