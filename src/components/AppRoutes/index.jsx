import { HashRouter, Route, Routes } from "react-router-dom";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";

// Components
import FixScrollToTop from "../FixScrollToTop";

// Pages
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import ModalDemo from "@/pages/ModalDemo";
import ScrollDemo from "@/pages/ScrollDemo";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Test from "@/pages/Test";

function AppRoutes() {
  return (
    <HashRouter>
      <FixScrollToTop />
      <Routes>
        {/* Default Layout */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal-demo" element={<ModalDemo />} />
          <Route path="/scroll-demo" element={<ScrollDemo />} />
        </Route>

        {/* AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route>
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
