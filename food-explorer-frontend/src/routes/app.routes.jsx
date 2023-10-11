import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { AlterDish } from "../pages/AlterDish";
import { Order } from "../pages/Order";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newDish" element={<NewDish />} />
      <Route path="/alterDish/:id" element={<AlterDish />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}