import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { SupplierProvider } from "./context/SupplierContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CategoryProvider>
        <SupplierProvider>
          <App />
        </SupplierProvider>
      </CategoryProvider>
    </ProductProvider>
  </StrictMode>
);
