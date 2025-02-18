// toastify
import { ToastContainer } from "react-toastify";
import { Bounce, toast } from "react-toastify";

// Material
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const ConfigedToastContainer = () => {
  return (
    <ToastContainer
      closeButton={({ type }) => {
        return (
          <Stack position='absolute' top={5} left={5}>
            <CloseIcon color={type === "error" ? "error" : "success"} />
          </Stack>
        );
      }}
      icon={({ type }) => (
        <Stack>
          <InfoOutlinedIcon color={type as "error" | "success"} />
        </Stack>
      )}
    />
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const myToast = {
  error: (text: string) =>
    toast.error(text, {
      className: "aaa",
      style: {
        backgroundColor: "#FFF2F4",
        border: "1px solid #A62639",
        color: "#A62639",
      },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }),
  success: (text: string) =>
    toast.success(text, {
      className: "aaa",
      style: {
        backgroundColor: "#ECFFF2",
        border: "1px solid #0D8B0B",
        color: "#0D8B0B",
      },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }),
};
