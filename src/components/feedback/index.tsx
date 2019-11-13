import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback,
} from 'reactstrap';
import { Product } from '../../store/products/types';

interface FeedbackFormProps {
  cartItems: Product[];
}

interface FeedbackFormState {
  email: string;
  comments: string;
  validate: {
    emailState: string;
  }
}

export default class FeedBackForm extends Component<FeedbackFormProps, FeedbackFormState> {
  constructor(props: FeedbackFormProps) {
    super(props);
      this.state = {
      'email': '',
      'comments': '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e: any) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }

  handleChange = async (event: any) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    //@ts-ignore
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e: any) {
    e.preventDefault();
    console.log(`Email: ${ this.state.email }`)
    console.log(`Comments: ${ this.state.comments }`)
  }

  render() {
    const { email, comments } = this.state;
    return (
      <Container className="App">
        <h2>Feedback Form</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
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
                placeholder="Your feedback is always welcome..!"
                value={ comments }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
      </Form>
      </Container>
    );
  }
}