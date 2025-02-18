// React Stuff
import { JSX, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { MobileDownMenu } from "./MobileDownMenu/mobileDownMenu";
import { MobileHeader } from "./MobileHeader/MobileHeader";

export const Layout: React.FC = (): JSX.Element => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (window && window.innerWidth < 1200) {
      setIsMobileView(true);
    }

    const mobileViewCheck = (e: Event) => {
      const target = e.target as Window;
      console.log(target.innerWidth);

      if (target.innerWidth < 1200) setIsMobileView(true);
      else setIsMobileView(false);
    };

    addEventListener("resize", mobileViewCheck);

    return () => removeEventListener("resize", mobileViewCheck);
  }, []);

  return (
    <>
      {isMobileView ? <MobileHeader /> : <Header />}
      <Outlet />
      {location.pathname.includes("cart") ? null : <Footer />}
      {isMobileView ? <MobileDownMenu /> : null}
    </>
  );
};
