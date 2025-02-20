// React Stuff
import { JSX, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { MobileDownMenu } from "./MobileDownMenu/mobileDownMenu";
import { MobileHeader } from "./MobileHeader/MobileHeader";

// Context
import { useStore } from "../../context/store";
import { MobileViewActionTypes } from "../../context/mobileView/mobileViewReducer";

export const Layout: React.FC = (): JSX.Element => {
  const { store, dispatch } = useStore();
  const location = useLocation();

  useEffect(() => {
    if (window && window.innerWidth < 1200) {
      dispatch({ type: MobileViewActionTypes.Yes });
    }
  }, []);

  return (
    <>
      {store.mobileView.is ? <MobileHeader /> : <Header />}
      <Outlet />
      {location.pathname.includes("cart") ? null : <Footer />}
      {store.mobileView.is ? <MobileDownMenu /> : null}
    </>
  );
};
