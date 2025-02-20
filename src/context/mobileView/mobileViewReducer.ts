import { MobileView, MobileViewActions } from "../types.store";

export enum MobileViewActionTypes {
  Yes = "yes",
}

export const mobileViewReducer = (
  mobileView: MobileView,
  action: MobileViewActions
) => {
  switch (action.type) {
    case MobileViewActionTypes.Yes:
      return { is: true };

    default:
      return mobileView;
  }
};
