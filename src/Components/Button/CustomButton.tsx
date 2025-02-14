import classNames from "classnames";
import { Avatar, Button, ButtonProps, Tooltip } from "antd";
import { PlusIcon, ExportIcon, ReloadIcon, DownIcon, SearchIcon, FilterIcon, CancelIcon, PreviousIcon } from "../icons";
import "./Button.scss";

interface CustomButtonProps extends ButtonProps {
  tooltip?: string;
  iconName?: "plus" | "export" | "reload" | "down" | "search" | "filter" | "cancel" | "previous"; // Tên của biểu tượng
  text?: string;
  label?: string;
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
  previous: PreviousIcon,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  tooltip,
  iconName,
  text,
  label,
  avatar = false,
  primary = false,
  secondary = false,
  outline = false,
  detail = false,
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
    "detail-btn": detail
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
      ) : label ? (
        <Button className={buttonClass} {...props} >
          {text && <span>{text}</span>}
          <span
            className="selected-label"
            style={{
              color: "rgb(168, 162, 158)",
              maxWidth: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            {label}
            {IconComponent && (
              <span className="ant-btn-icon" style={{ marginLeft: "10px" }}>
                <IconComponent width="10px" height="10px" />
              </span>
            )}
          </span>
        </Button>
      )
        : (<Button className={buttonClass} {...props} >
          {IconComponent && (
            <span className="ant-btn-icon">
              <IconComponent />
            </span>
          )}
          {text && <span>{text}</span>}
        </Button>)
      }

    </Tooltip >
  );
};

export default CustomButton;
