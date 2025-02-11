import { Outlet } from "react-router";
import Navbar from "../share/Navbar";
import Footer from "../share/Footer";

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