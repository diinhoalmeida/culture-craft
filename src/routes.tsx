import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import Home from "./pages/Home/home";
import ContentPage from "./pages/ContentPage/contentPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/content/:pageName" element={<ContentPage />} />
      </Route>
    </Routes>
  );
}
