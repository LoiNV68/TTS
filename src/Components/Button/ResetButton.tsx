import { ReloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface ResetButtonProps {
    onClick: () => void;
    [key: string]: any; 
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick, ...props }) => {
    return (
        <Button
            className="mr-2"
            style={{ fontSize: 'unset' }}
            type="link"
            icon={<ReloadOutlined />}
            onClick={onClick}
            {...props} 
        >
            Set to default
        </Button>
    );
};

export default ResetButton;
