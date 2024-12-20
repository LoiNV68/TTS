import React from "react";
import { Dropdown, Avatar, MenuProps } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import CustomButton from "./CustomButton";
import "./Button.scss";

interface UserDropdownProps {
  username: string;
  email: string;
  onLogout?: () => void;
  onSettings?: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  username,
  email,
  onLogout,
  onSettings,
}) => {
  const menuItems: MenuProps["items"] = [
    {
      key: "user-info",
      label: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            padding: "12px 16px",
            width: "252px",
            margin: "-4px -8px",
            height: "56px"
          }}
        >
          <div className="flex items-center gap-5">
            <Avatar className="avatar-dropdown" size={38} />
            <div className="flex flex-col">
              <div className="text-black font-semibold text-sm">{username}</div>
              <div className="text-gray-500 text-xs">{email}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "settings",
      label: (
        <div className="flex items-center gap-3" onClick={onSettings}>
          <SettingOutlined style={{ fontSize: "16px" }} />
          <span>Account settings</span>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: (
        <div className="flex items-center gap-3 text-red-500" onClick={onLogout}>
          <LogoutOutlined style={{ fontSize: "16px" }} />
          <span>Logout</span>
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      placement="bottomRight" 
      destroyPopupOnHide
      getPopupContainer={trigger => trigger.parentElement!}
    >
      <div>
        <CustomButton
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 10px 4px 8px",
            height: "36px",
            gap: "8px",
          }}
          text={username}
          avatar
          outline
          iconName="down"
        />
      </div>
    </Dropdown>
  );
};


