import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"

const DashboardLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default DashboardLayout