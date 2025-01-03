import classNames from "classnames";
import { Avatar, Button, Tooltip } from "antd";
import { PlusIcon, ExportIcon, ReloadIcon, DownIcon, SearchIcon, FilterIcon, CancelIcon } from "../icons";
import "./Button.scss";

interface CustomButtonProps {
  tooltip?: string;
  iconName?: "plus" | "export" | "reload" | "down" | "search" | "filter" | "cancel"; // Tên của biểu tượng
  text?: string;
  avatar?: boolean;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  groupBtn?: boolean;
  [key: string]: any; 
}
// Tên của biểu tượng ứng với tên component
const icons = {
  plus: PlusIcon,
  export: ExportIcon,
  reload: ReloadIcon,
  down: DownIcon,
  search: SearchIcon,
  filter: FilterIcon,
  cancel: CancelIcon,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  tooltip,
  iconName,
  text,
  avatar = false,
  primary = false,
  secondary = false,
  outline = false,
  groupBtn = false,
  ...props
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
        <Button className={buttonClass} {...props} >
          <Avatar className="avatar" />
          {text && <span>{text}</span>}

          {IconComponent && (
            <span className="ant-btn-icon">
              <IconComponent />
            </span>
          )}
        </Button>
      ) : (
        <Button className={buttonClass} {...props} >
          {IconComponent && (
            <span className="ant-btn-icon">
              <IconComponent />
            </span>
          )}
          {text && <span>{text}</span>}
        </Button>
      )}
    </Tooltip>
  );
};

export default CustomButton;
