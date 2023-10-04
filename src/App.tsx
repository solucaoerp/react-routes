import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Client/Home";
import Welcome from "./routes/Client/Welcome";
import About from "./routes/Client/About";
import NotFound from "./routes/Client/NotFound";

import Product from "./routes/Client/Product";
import Computers from "./routes/Client/Product/Category/Computers";
import Books from "./routes/Client/Product/Category/Books";
import Electronics from "./routes/Client/Product/Category/Electronics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />

          <Route path="product" element={<Product />}>
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
