import { User, UserActions } from "../types.store";

export enum UserActionTypes {
  Login,
  Logout,
}
export const userReducer = (user: User, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.Login: {
      const { access, refresh, ...rest } = action.payload;

      user = {
        userInfo: {
          ...rest,
        },
        token: {
          access: access,
          refresh: refresh,
        },
        isAuthenticated: true,
      };
      console.log(user);
      return user;
    }

    case UserActionTypes.Logout:
      return {
        userInfo: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return user;
  }
};
