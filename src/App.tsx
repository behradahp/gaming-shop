import { Rtl } from "./config/rtlCashe";
import { MUITheme } from "./config/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./context/storeProvider";

// Components - Pages
import { HomePage } from "./Pages/Regular/Home";
import { UserPanelPage } from "./Pages/Dashboard/UserPanel";
import { LoginPage } from "./Pages/Auth/Login";
import { RegisterPage } from "./Pages/Auth/Register";
import { ProtectRoutes } from "./Pages/ProtectRoutes";
import { Layout } from "./components/Layout/Layout";
import { CategoryPage } from "./Pages/Regular/Category";
import { ProductsPage } from "./Pages/Regular/Products";
import { ProductVSPage } from "./Pages/Regular/ProductVS";
import { BasketPage } from "./Pages/Regular/Basket";

// toast
import { ConfigedToastContainer } from "./config/toast";

function App() {
  return (
    <>
      <Rtl>
        <MUITheme>
          <StoreProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/category' element={<CategoryPage />} />
                  <Route path='/product' element={<ProductsPage />} />
                  <Route path='/productvs' element={<ProductVSPage />} />
                  <Route path='/cart' element={<BasketPage />} />
                </Route>

                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />

                <Route element={<ProtectRoutes />}>
                  <Route path='/dashboard' element={<UserPanelPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </StoreProvider>
        </MUITheme>
      </Rtl>
      <ConfigedToastContainer />
    </>
  );
}

export default App;
