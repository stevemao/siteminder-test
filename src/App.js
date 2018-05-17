import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  max-width: 575px;
  width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  height: 40px;
  border-radius: 3px;
  font-size: 1pc;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`

const Textarea = styled.textarea`
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <h1>Email a Friend</h1>
        </header>

        <Form>
          <Input placeholder="To" />
          <Input placeholder="From" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Note" />
          <SendButton type="submit" value="Send" />
        </Form>
      </Wrapper>
    );
  }
}

export default App;
