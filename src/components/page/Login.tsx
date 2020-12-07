// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, FormEvent } from 'react';
import { Button, Message, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface LoginProps {
  errorMsg: string;
  handleOnChangeEmail: (value: string) => void;
  handleOnChangePassword: (value: string) => void;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const Login: FC<LoginProps> = ({
  errorMsg,
  handleOnChangeEmail = () => {},
  handleOnChangePassword = () => {},
  handleOnSubmit = () => {},
}) => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://react.semantic-ui.com/logo.png" /> Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleOnSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(event, data) => handleOnChangeEmail(String(data.value))}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(event, data) => handleOnChangePassword(String(data.value))}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        {errorMsg ? <Message error list={[errorMsg]} /> : <div />}
        <Message>
          New to us? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
