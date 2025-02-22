import { Product } from "../@types/api.types";

export const stockCheck = (product: Product) => {
  if (product.status == "out_of_stock") return false;
  if (
    product.default_variant.price.rrp_price !=
    product.default_variant.price.selling_price
  )
    return true;
  return false;
};
