import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TravelTips from "./pages/travel-tips/TravelTips";
import SingleCity from "./pages/single-city/SingleCity";
import Questions from "./pages/questions/Questions";
import Tourists from "./pages/tourists/Tourists";
import SingleTourism from "./pages/single-tourism/SingleTourism";
import CreateCityForm from "./pages/admin/form/CreateCityForm";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import AdminLayout from "./components/layout/AdminLayout";
import Booking from "./pages/admin/booking/Booking";
import CityList from "./pages/admin/city-list/CityList";
import BookingDetail from "./pages/admin/booking-detail/BookingDetail";
import { AuthProvider } from "./context/AuthContext ";
import DashboardLayout from "./components/layout/DashboardLayout";
import CityListDetail from "./pages/admin/city-list-detail/CityListDetail";
import { Toaster } from "./components/ui/toaster";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities`
      );
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Home />} />
              <Route path={"/travel-tips"} element={<TravelTips />} />
              <Route path="questions" element={<Questions />} />
              <Route path="tourists" element={<Tourists />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="tourism" element={<SingleTourism />} />
              <Route path="city">
                <Route path=":id" element={<SingleCity />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route path="form" element={<CreateCityForm />} />
              <Route path="city-list" element={<CityList />} />
              <Route path="booking" element={<Booking />} />
              <Route path="booking/:id" element={<BookingDetail />} />
              <Route path="city-list/:id" element={<CityListDetail />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
