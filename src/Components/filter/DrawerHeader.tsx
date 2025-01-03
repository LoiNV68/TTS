
import { CloseOutlined } from '@ant-design/icons'
import { AdvancedSearch } from '../icons'

interface DrawerHeaderProps {
    onClose: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onClose }) => {
    return (
        <div className='drawer-header'>
            <div className="title">
                <p style={{ paddingTop: "4px" }}>
                    <AdvancedSearch />
                </p>
                <span style={{ marginLeft: "12px", }}>Advanced Search</span>
            </div>
            <CloseOutlined className='close-icon' style={{ width: "17px", height: "17px", alignItems: "center", padding: "4px" }} onClick={onClose} />
        </div>
    )
}

export default DrawerHeader