import{ useState } from "react";
import { SettingOutlined } from "@ant-design/icons";

const SettingIcon = () => {
  const [hover, setHover] = useState(false);

  return (
    <SettingOutlined
      style={{
        fontSize: "20px",
        cursor: "pointer",
        color: hover ? "rgb(239, 68, 68)" : "black",
      }}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    />
  );
};

export default SettingIcon;
