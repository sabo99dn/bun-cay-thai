import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import ActionsType from './constants';

const initState = {
  cartData: [],
  selectedBranch: {},
  selectedAddress: {},
  selectedVoucher: {},
};

const CartReducer = (state = initState, action = {}) => {
  let data = [...state.cartData];
  switch (action.type) {
    case ActionsType.ADD_ITEM_TO_CART:
      const index = data.findIndex(
        item =>
          item.id === action.payload.id &&
          JSON.stringify(item.topping) ===
            JSON.stringify(action.payload.topping),
      );
      if (index < 0) {
        data.push(action.payload);
      } else {
        data[index] = {
          ...data[index],
          amount: data[index].amount + action.payload.amount,
        };
      }
      return {
        ...state,
        cartData: data,
      };
    case ActionsType.UPDATE_ITEM_TO_CART:
      data[action.payload.index][action.payload.key] = action.payload.value;
      return {
        ...state,
        cartData: data,
      };
    case ActionsType.DELETE_ITEM_TO_CART:
      data.splice(action.payload, 1);
      return {
        ...state,
        cartData: data,
      };
    case ActionsType.SET_SELECTED_BRANCH: {
      return {
        ...state,
        selectedBranch: action.payload,
      };
    }
    case ActionsType.SET_SELECTED_ADDRESS: {
      return {
        ...state,
        selectedAddress: action.payload,
      };
    }
    case ActionsType.SET_SELECTED_VOUCHER: {
      return {
        ...state,
        selectedVoucher: action.payload,
      };
    }
    case ActionsType.RESET_CART: {
      return {
        ...state,
        cartData: [],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

const persistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  blacklist: ['selectedBranch', 'selectedAddress', 'selectedVoucher'],
  whitelist: ['cartData'],
};

export default persistReducer(persistConfig, CartReducer);
