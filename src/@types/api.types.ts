import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type Category = {
  id: number;
  fa_title: string;
  en_title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  image: string;
  url: string;
  subcategory: subCategory[];
};

export type subCategory = Omit<Category, "subcategory" | "image">;

type ProductImage = {
  main: {
    url: string[];
  };
};
export type Product = {
  id: number;
  title_fa: string;
  images: ProductImage;
  status: string;
  default_variant: {
    price: {
      selling_price: number;
      rrp_price: number;
      order_limit: number;
      is_incredible: boolean;
      is_promotion: boolean;
    };
  };
};
