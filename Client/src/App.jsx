import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route,useLocation ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import CarsDetails from "./pages/CarsDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Footer from "./components/Footer"
import Layout from "./pages/Owner/Layout";
import AddCar from "./pages/Owner/AddCar";
import Dashboard from "./pages/Owner/Dashboard";
import ManageCars from "./pages/Owner/ManageCars";
import ManageBookings from "./pages/Owner/ManageBookings";
const App = () => {
   const [showLogin, setShowLogin] = useState(false);
   const location = useLocation();
   const isOwnerPath = location.pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
  
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/car-details/:id" element={<CarsDetails />} />
  <Route path="/cars" element={<Cars />} />
  <Route path="/my-bookings" element={<MyBookings />} />

  <Route path="/owner" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="add-car" element={<AddCar />} />
    <Route path="manage-cars" element={<ManageCars />} />
    <Route path="manage-bookings" element={<ManageBookings />} />
  </Route>
</Routes>
      
     {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;