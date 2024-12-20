import React from "react";
import { Layout, Divider } from "antd";
import CustomButton from "../Components/Button/CustomButton";
import SettingIcon from "../Icons/SettingIcon";
import BellIcon from "../Icons/BellIcon";
import { UserDropdown } from "../Components/Button/UserDropdown";

const { Header } = Layout;

interface AppHeaderProps {
  title: string;
  idBooking?: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({ title, idBooking }) => {
  return (
    <Header
      className="bg-white px-6 flex items-center justify-between border-b border-[#D6D3D1] z-10"
      style={{ height: "60px" }}
    >
      <div className="flex items-center gap-3">
        <h3 className="text-lg m-0" >
          {title}
          {idBooking ? ": " : ""}
        </h3>
        {idBooking ? (
          <h3
            className="text-lg m-0 text-[#ED4E6B] font-semibold"
          >
            {idBooking}
          </h3>
        ) : null}
      </div>
      <div className="flex items-center gap-5">
        <CustomButton
          tooltip="Add Individual Booking"
          iconName="plus"
          text="Individual"
          secondary
        />
        <CustomButton
          tooltip="Add Group Booking"
          iconName="plus"
          text="Group"
          primary
          groupBtn
        />
        <Divider
          type="vertical"
          className="h-6 m-0 border-[#D6D3D1] border"
        />
        <SettingIcon />
        <BellIcon />


        <UserDropdown
          username="Nguyen Van A"
          email="anhnv@apec.com.vn"
        />
      </div>
    </Header>
  );
};

export default AppHeader;
