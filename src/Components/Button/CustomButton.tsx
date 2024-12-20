import classNames from "classnames";
import { Avatar, Button, Tooltip } from "antd";
import PlusIcon from "../../Icons/PlusIcon";
import ExportIcon from "../../Icons/ExportIcon";
import ReloadIcon from "../../Icons/ReloadIcon";
import DownIcon from "../../Icons/DownIcon";
import SearchIcon from "../../Icons/SearchIcon";

import "./Button.scss";

interface CustomButtonProps {
  tooltip?: string;
  iconName?: "plus" | "export" | "reload" | "down" | "search"; // Tên của biểu tượng
  text: string;
  avatar?: boolean;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  groupBtn?: boolean;
  style?: React.CSSProperties;
}
// Tên của biểu tượng ứng với tên component
const icons = {
  plus: PlusIcon,
  export: ExportIcon,
  reload: ReloadIcon,
  down: DownIcon,
  search: SearchIcon,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  tooltip,
  iconName,
  text,
  avatar = false,
  primary = false,
  secondary = false,
  outline = false,
  groupBtn = false,
}) => {
  // Class name 
  const buttonClass = classNames("my-button ant-btn", {
    "primary-button": primary,
    "secondary-button": secondary,
    "outline-button": outline,
    "group-btn": groupBtn,
    "avatar-custom": avatar,
  });

  // Component theo biểu tượng
  const IconComponent = iconName ? icons[iconName] : null;

  return (
    <Tooltip title={tooltip}>
      {avatar ? (
        <Button className={buttonClass} style={style}>
          <Avatar className="avatar" />
          <span>{text}</span>
          {IconComponent && (
            <span className="ant-btn-icon">
              <IconComponent />
            </span>
          )}
        </Button>
      ) : (
        <Button className={buttonClass} style={style}>
          {IconComponent && (
            <span className="ant-btn-icon">
              <IconComponent />
            </span>
          )}
          <span>{text}</span>
        </Button>
      )}
    </Tooltip>
  );
};

export default CustomButton;
