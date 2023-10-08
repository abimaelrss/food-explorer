import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { AlterDish } from "../pages/AlterDish";
import { Order } from "../pages/Order";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      {/* <Route path="/dish" element={<Dish />} /> */}
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/newDish" element={<NewDish />} />
      <Route path="/alterDish/:id" element={<AlterDish />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}