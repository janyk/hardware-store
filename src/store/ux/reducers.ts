import {
  UXState,
  SET_FTUE_COMPLETE,
  UXActionTypes,
} from "./types";

/*
 Cart is a hashmap as stores should usually be normalised.
 We aren't dealing with a huge amount of products, and a cart is unlikely to be that big
 But I felt it was important to demonstrate this. Maybe makes more sense for products store.
*/
const initialState: UXState = {
  ftueComplete: false
};

export function uxReducer(
  state = initialState,
  action: UXActionTypes
): UXState {
  switch (action.type) {
    case SET_FTUE_COMPLETE: {
      return { ftueComplete: true };
    }
    default:
      return state;
  }
}

export const isFtue = ({ ftueComplete }: UXState) => !ftueComplete;