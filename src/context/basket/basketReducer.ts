import { Basket, BasketActions } from "../types.store";

export enum BasketActionTypes {
  Add = "add",
  Increase = "increase",
  Decrease = "decrease",
  Delete = "delete",
  Clear = "clear",
}

export const basketReducer = (basket: Basket[], action: BasketActions) => {
  let newBasket: Basket[] = [];

  basket = localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket")!)
    : basket;

  switch (action.type) {
    case BasketActionTypes.Add: {
      newBasket = [
        ...basket,
        { product_id: action.payload!.id, product: action.payload!, count: 1 },
      ];
      break;
    }

    case BasketActionTypes.Increase: {
      basket.forEach((item) => {
        if (item.product_id === action.payload!.id) item.count += 1;
        newBasket.push(item);
      });
      break;
    }

    case BasketActionTypes.Decrease: {
      basket.forEach((item) => {
        if (item.product_id === action.payload!.id) item.count -= 1;
        item.count !== 0 && newBasket.push(item);
      });
      break;
    }

    case BasketActionTypes.Delete: {
      basket.forEach((item) => {
        if (item.product_id !== action.payload!.id) newBasket.push(item);
      });
      break;
    }

    case BasketActionTypes.Clear:
      newBasket = [];
      break;

    default:
      newBasket = basket;
  }

  localStorage.setItem("basket", JSON.stringify(newBasket));

  return newBasket;
};
