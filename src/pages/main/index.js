import React, { Component } from 'react';
import axios from 'axios';

import {
  MainDiv,
  Title,
  Input,
  Button,
  InputLabel,
  LabelError,
  LabelUniqueResult,
  UniqueStringResult,
  InputError,
  MainDivHidden,
  LineBlock,
} from './styles';

const api = axios.create({
  baseURL: 'https://api-uniqueify.herokuapp.com/',
});

class Main extends Component {
  state = {
    stringToUniqueify: '',
    uniquefiedString: '',
    errorMessage: '',
  };

  handleGetUniqueLetters = async (e) => {
    e.preventDefault();

    await api
      .get('/unique-ify', {
        params: { text: this.state.stringToUniqueify },
      })
      .then((response) => {
        this.setState({ uniquefiedString: response.data });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ errorMessage: error.response.data });
        }
      });
  };

  inputFocus = (e) => {
    e.target.value = '';
    this.setState({ errorMessage: '' });
    this.setState({ uniquefiedString: '' });
    this.setState({ stringToUniqueify: '' });
  };

  render() {
    let InputText = Input;
    let DivUnique = MainDivHidden;

    if (this.state.uniquefiedString) {
      DivUnique = MainDiv;
    }

    if (this.state.errorMessage) {
      InputText = InputError;
      DivUnique = MainDivHidden;
    }
    return (
      <MainDiv>
        <Title>Unique-ifier</Title>
        <InputLabel>Text for processing</InputLabel>
        <form onSubmit={this.handleGetUniqueLetters}>
          <InputText
            type="text"
            onChange={e => this.setState({ stringToUniqueify: e.target.value })}
            value={this.state.stringToUniqueify}
            onFocus={this.inputFocus}
          />
          <LabelError>{this.state.errorMessage}</LabelError>
          <Button type="submit">Unique-ify!</Button>
        </form>
        <DivUnique>
          <LineBlock />
          <LabelUniqueResult>Unique letters found:</LabelUniqueResult>
          <UniqueStringResult>{this.state.uniquefiedString}</UniqueStringResult>
        </DivUnique>
      </MainDiv>
    );
  }
}

export default Main;
