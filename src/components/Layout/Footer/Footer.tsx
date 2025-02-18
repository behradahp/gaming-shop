// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Component
import { FooterTop } from "./top/FooterTop";
import { StoreLinks } from "./bottom/StoreLinks";
import { CustomersLinks } from "./bottom/CustomersLinks";
import { ContactInfo } from "./bottom/ContactInfo";
import { TrustAnsSocials } from "./bottom/TrustAndSocial";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <Stack
        position='relative'
        justifyContent='end'
        alignItems='center'
        width='100%'
        sx={{
          height: {
            xs: 1270,
            md: 1200,
            lg: 653,
          },
        }}
      >
        <FooterTop />

        <Stack
          width='100%'
          height='80%'
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: {
              xs: "center",
              lg: "end",
            },
            justifyContent: {
              xs: "flex-end",
              lg: "space-between",
            },
            gap: {
              xs: "30px",
              lg: 0,
            },
            padding: {
              xs: "30px",
              lg: "0 181px 70px 160px",
            },
          }}
          bgcolor='white'
          boxShadow={5}
        >
          <StoreLinks />

          <CustomersLinks />

          <ContactInfo />

          <TrustAnsSocials />
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: { xs: "flex", lg: "none" },
          width: "100%",
          height: "100px",
        }}
      ></Stack>
    </>
  );
};
