import {
  FeedbackActionTypes,
  FeedbackFormState,
  FEEDBACK_FORM_SUBMIT_STARTED,
  FEEDBACK_FORM_SUBMIT_FAILED,
  FEEDBACK_FORM_SUBMIT_SUCCESS,
} from "./types";

/*
 Cart is a hashmap as stores should usually be normalised.
 We aren't dealing with a huge amount of products, and a cart is unlikely to be that big
 But I felt it was important to demonstrate this. Maybe makes more sense for products store.
*/
const initialState: FeedbackFormState = {
  feedbackFormFailed: false,
  feedbackFormSuccess: false,
  feedbackFormProcessing: false,
};

export function feedbackFormReducer(
  state = initialState,
  action: FeedbackActionTypes
): FeedbackFormState {
  switch (action.type) {
    case FEEDBACK_FORM_SUBMIT_STARTED: {

      return { ...state,  feedbackFormProcessing: true, feedbackFormFailed: false, feedbackFormSuccess: false};
    }

    case FEEDBACK_FORM_SUBMIT_FAILED: {

      return { ...state,  feedbackFormProcessing: false, feedbackFormFailed: true, feedbackFormSuccess: false};
    }
    
    case FEEDBACK_FORM_SUBMIT_SUCCESS: {

      return { ...state, feedbackFormProcessing: false, feedbackFormFailed: false, feedbackFormSuccess: true};
    }
    default:
      return state;
  }
}