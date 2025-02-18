// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// Context
import { useStore } from "../../../context/store";

export const UserProfile: React.FC = (): JSX.Element => {
  const { store } = useStore();

  if (store.user.isAuthenticated) {
    return (
      <Button
        variant='outlined'
        color='secondary'
        sx={{
          borderRadius: "10px",
          minWidth: "48px",
          padding: 0,
          height: "48px",
        }}
        component={NavLink}
        to='/dashboard'
      >
        <PersonOutlineOutlinedIcon color='secondary' fontSize='medium' />
      </Button>
    );
  }

  return (
    <Button
      variant='outlined'
      startIcon={<PersonOutlineOutlinedIcon />}
      color='secondary'
      sx={{
        color: "secondary.dark",
        borderColor: "#EAEBF0",
        borderRadius: "10px",
        padding: "9px 16px",
        fontWeight: "300",
      }}
      component={NavLink}
      to='/login'
    >
      ورود/ثبت نام
    </Button>
  );
};
