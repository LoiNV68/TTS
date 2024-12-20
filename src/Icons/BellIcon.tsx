import { useState } from "react";
import { BellOutlined } from "@ant-design/icons";

const App = () => {
  const [hover, setHover] = useState(false);

  return (
    <BellOutlined
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

export default App;
