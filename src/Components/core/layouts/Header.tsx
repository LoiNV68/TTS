import React from "react";
import { Layout, Divider } from "antd";
import { SettingIcon, BellIcon } from "../../icons";
import { UserDropdown, CustomButton } from "../../button";
import { useLocation, useNavigate } from "react-router-dom";

const { Header } = Layout;

interface AppHeaderProps {
  title: string;
  idBooking?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, idBooking }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname.split("/").length > 2;

  const handleNavigation = (path: string) => () => navigate(path);

  const previousButton = isSubPage && (
    <CustomButton
      onClick={handleNavigation("/booking")}
      outline
      iconName="previous"
      style={{ width: "24px", height: "24px", padding: "4px", boxShadow: "none", marginRight: "15px" }}
    />
  );

  return (
    <Header className="bg-white px-6 flex items-center justify-between border-b border-[#D6D3D1] z-10" style={{ height: "60px" }}>
      <div className="flex items-center gap-3">
        <h3 className="text-lg m-0">
          {previousButton}
          {title}
          {idBooking && `: `}
        </h3>
        {idBooking && (
          <h3 className="text-lg m-0 text-[#ED4E6B] font-semibold">{previousButton}{idBooking}</h3>
        )}
      </div>
      <div className="flex items-center gap-5">
        {!isSubPage && (
          <>
            <CustomButton tooltip="Add Individual Booking" iconName="plus" text="Individual" secondary onClick={handleNavigation("/booking/new-individual")} />
            <CustomButton tooltip="Add Group Booking" iconName="plus" text="Group" primary groupBtn />
            <Divider type="vertical" className="h-6 m-0 border-[#D6D3D1] border" />
          </>
        )}
        <SettingIcon />
        <BellIcon />
        <UserDropdown username="Nguyen Van A" email="anhnv@apec.com.vn" />
      </div>
    </Header>
  );
};

export default AppHeader;
