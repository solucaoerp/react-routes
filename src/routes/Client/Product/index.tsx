import { Outlet } from "react-router-dom";
import Category from "./Category";

export default function Products() {
    return (
        <div>
            <Category />
            <Outlet />
        </div>
    );
}