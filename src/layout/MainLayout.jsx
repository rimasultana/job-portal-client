import { Outlet } from "react-router";
import Navbar from "../routes/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
          <Navbar/>
          <div className="min-h-screen">
          <Outlet/>
          </div>
          <Footer/>  
        </>
    );
};

export default MainLayout;