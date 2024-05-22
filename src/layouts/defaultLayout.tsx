import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Nav/header";
import "./defaultLayout.css";

export function DefaultLayout() {
  return (
    <div className="flex justify-center relative min-h-screen px-5">
      <div className="bg-image-blur absolute top-0 z-0 left-0 w-full h-full"></div>
      <div className="bg-image-blur-overlay absolute z-5 top-0 left-0 w-full h-full z-1"></div>
      <div className="w-[1280px] flex flex-col z-10 pt-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
