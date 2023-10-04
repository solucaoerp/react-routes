import { Outlet } from "react-router-dom";
import Category from "./Category";


export default function Product() {
    return (
        <div>
            <Category />
            <Outlet />
        </div>
    );
}