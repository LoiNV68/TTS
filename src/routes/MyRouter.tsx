import {Routes, Route } from "react-router-dom";
import { Booking, Dashboard, GuestProfile, MyAllotment, RoomAvailability, UserManagement } from "../pages";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room-availability" element={<RoomAvailability />} />
            <Route path="/my-allotment" element={<MyAllotment />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/guest-profile" element={<GuestProfile />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>

    );
};

export default MyRouter;
