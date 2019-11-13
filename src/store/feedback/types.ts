export const FEEDBACK_FORM_SUBMIT_STARTED = "FEEDBACK_FORM_SUBMIT_STARTED";
export const FEEDBACK_FORM_SUBMIT_SUCCESS = "FEEDBACK_FORM_SUBMIT_SUCCESS";
export const FEEDBACK_FORM_SUBMIT_FAILED = "FEEDBACK_FORM_SUBMIT_FAILED";
export const FEEDBACK_FORM_SUBMIT_CLEAR = "FEEDBACK_FORM_SUBMIT_CLEAR";

export interface FeedbackFormState {
  feedbackFormProcessing: boolean;
  feedbackFormSuccess: boolean;
  feedbackFormFailed: boolean;
}

interface FeedbackFormAction {
  type: typeof FEEDBACK_FORM_SUBMIT_STARTED;
}

interface FeedbackFormFailedAction {
  type: typeof FEEDBACK_FORM_SUBMIT_FAILED;
}

interface FeedbackFormSuccessAction {
  type: typeof FEEDBACK_FORM_SUBMIT_SUCCESS;
}

interface FeedbackFormClearAction  {
  type: typeof FEEDBACK_FORM_SUBMIT_CLEAR;
}

export type FeedbackActionTypes = FeedbackFormClearAction | FeedbackFormAction | FeedbackFormFailedAction | FeedbackFormSuccessAction;
