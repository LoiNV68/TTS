import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleProvider = ({ children }: { children: (title: string) => JSX.Element }) => {
    const location = useLocation();

    // Ánh xạ đường dẫn đến tiêu đề
    const routeTitles: { [key: string]: string } = {
        "/dashboard": "Dashboard",
        "/room-availability": "Room Availability",
        "/my-allotment": "My Allotment",
        "/booking": "Booking",
        "/booking/new-individual": "New Individual",
        "/user-management": "User Management",
        "/guest-profile": "Guest Profile",
    };

    // Lấy tiêu đề, mặc định là "Page Not Found"
    const title = routeTitles[location.pathname] || "Page Not Found";

    useEffect(() => {
        // Cập nhật tiêu đề tab trình duyệt
        document.title = title;
    }, [title]);
    return children(title);
};

export default PageTitleProvider;
