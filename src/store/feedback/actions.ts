
import {  FEEDBACK_FORM_SUBMIT_STARTED, FEEDBACK_FORM_SUBMIT_SUCCESS, FEEDBACK_FORM_SUBMIT_FAILED } from './types';

export function startFeedbackForm() {
  return {
    type: FEEDBACK_FORM_SUBMIT_STARTED
  };
}

export function feedbackFormFailed() {
  return {
    type: FEEDBACK_FORM_SUBMIT_FAILED
  };
}

export function feedbackFormSuccess() {
  return {
    type: FEEDBACK_FORM_SUBMIT_SUCCESS
  };
}