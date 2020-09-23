import { SIGN_IN, SIGN_OUT } from '../actions/index';
import { menuOptions } from '../utils';

const defaultUser = {
  name: null,
  id: null,
  avator: null,
  permissions: menuOptions.map(menu => menu.permissionCode)
};

const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return defaultUser;
    default:
      return state;
  }
};

export default userReducer;
