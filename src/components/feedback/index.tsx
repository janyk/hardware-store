import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback, FormText
} from 'reactstrap';
import { thunkFeedbackForm } from '../../thunks';
import { AppState } from '../../store';

interface FeedbackFormProps {
  submitForm: Function;
  loading: boolean;
  success: boolean;
  failed: boolean;
}

interface FeedbackFormState {
  email: string;
  comments: string;
}


const initalState: FeedbackFormState = {
  email: '',
  comments: '',
};

const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email: string) =>  emailRex.test(email)

function FeedBackForm({ submitForm, loading, failed, success }: FeedbackFormProps) {
  const [{ email, comments }, setForm] = useState(initalState)
  
  const isValidEmail = validateEmail(email);
  return (
    <Container className="App">
      <h2>Feedback Form</h2>
      <Form className="form" onSubmit={ (e) => {
        e.preventDefault()
        if (isValidEmail) { submitForm({ email, comments }) }
      } 
      }>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
              value={ email }
              valid={!!isValidEmail}
              invalid={!isValidEmail}
              onChange={ (e) => setForm({ email: e.target.value, comments })}
            />
            <FormFeedback valid>
              Email is correct!
            </FormFeedback>
            <FormFeedback>
              Uh oh! Looks like there is an issue with your email. Please input a correct email.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="exampleComments">Comments</Label>
            <Input
              type="textarea"
              name="comments"
              id="exampleComments"
              placeholder="Your feedback is always welcome.."
              value={ comments }
              onChange={ (e) => setForm({ email, comments: e.target.value}) }
          />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
        <FormText>Status: {loading && 'loading'} {failed && 'failed'} {success && 'success'} </FormText>
    </Form>
    </Container>
  );

}

const mapStateToProps = (state: AppState) => ({
  failed: state.feedback.feedbackFormFailed,
  loading: state.feedback.feedbackFormProcessing,
  success: state.feedback.feedbackFormSuccess
})

const mapDispatchToProps = ({
  submitForm: thunkFeedbackForm
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedBackForm);
