import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Nav/header";
import "./defaultLayout.css";
import Footer from "../components/LayoutComponents/footer";

export function DefaultLayout() {
  return (
    <div className="flex items-center relative px-5 flex-col min-h-screen">
      <div className="bg-image-blur absolute top-0 z-0 left-0 w-full h-full"></div>
      <div className="bg-image-blur-overlay absolute z-5 top-0 left-0 w-full h-full z-1"></div>
      <div className="lg:w-[1025px] w-full flex flex-col z-10 pt-5 gap-8">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
