import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Text, TextArea } from 'react-form';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 575px;
  width: 100%;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const TextInput = styled(Text)`
  height: 40px;
  border-radius: 3px;
  font-size: 1pc;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`

const Textarea = styled(TextArea)`
  border-radius: 3px;
  height: 200pt;
  font-size: 1pc;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`

const SendButton = styled.input`
  background-color: #0295ff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1pc;
  margin: 15px auto 0;
  padding: 15px 35px;
  transition: background-color .2s ease-in;
  :hover {
    background-color: #0078ce;
  }
`

const Success = styled.div`
  color: green;
`

const Small = styled.small`
  display: block;
  margin-top: 20px;
  color: #888888;
`

class App extends Component {
  submit = () => {
    // TODO: hook up backend!
    this.setState( { success: true } )
    setTimeout(() => {
      this.setState( { success: false } )
    }, 5000)
  }

  state = {
    success: false
  }

  render() {
    return (
      <Wrapper>
        <header>
          <h1>Email a Friend</h1>
          {
            this.state.success &&
              <Success>Your email has been sent!</Success>
          }
        </header>

        <Form
          onSubmit={this.submit}
          render={({
            submitForm
          }) => (
            <StyledForm onSubmit={submitForm}>
              <TextInput field="to" placeholder="To" required type="email" />
              <TextInput field="ccs" placeholder="CCs" />
              <TextInput field="bccs" placeholder="BCCs" />
              <TextInput field="from" placeholder="From" required type="email" />
              <TextInput field="subject" placeholder="Subject" required />
              <Textarea field="note" placeholder="Note" required />
              <SendButton type="submit" value="Send" />
            </StyledForm>
          )}
        />

        <Small>By sending, I affirm I am permitted to send this email.</Small>
      </Wrapper>
    );
  }
}

export default App;
