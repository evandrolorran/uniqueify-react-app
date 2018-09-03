import React, { Component } from "react";
import axios from "axios";

import {
  MainDiv,
  Title,
  Input,
  Button,
  LineBlock,
  CustomLabel
} from "./styles";

const api = axios.create({
  baseURL: "https://api-uniqueify.herokuapp.com/"
});

class Main extends Component {
  state = {
    stringToUniqueify: "",
    uniquefiedString: "",
    errorMessage: ""
  };

  handleGetUniqueLetters = async e => {
    e.preventDefault();

    await api
      .get("/unique-ify", {
        params: { text: this.state.stringToUniqueify }
      })
      .then(response => {
        this.setState({ uniquefiedString: response.data });
      })
      .catch(error => {
        if (error.response) {
          this.setState({ errorMessage: error.response.data });
        }
      });
  };

  inputKeyPress = e => {
    if (e.charCode === 13) {
      e.target.blur();
    }
  };

  inputFocus = e => {
    e.target.value = "";
    this.setState({ errorMessage: "" });
    this.setState({ uniquefiedString: "" });
    this.setState({ stringToUniqueify: "" });
  };

  render() {
    return (
      <MainDiv>
        <Title>Unique-ifier</Title>
        <CustomLabel>Text for processing</CustomLabel>
        <form onSubmit={this.handleGetUniqueLetters}>
          <Input
            setError={this.state.errorMessage}
            type="text"
            onChange={e => this.setState({ stringToUniqueify: e.target.value })}
            value={this.state.stringToUniqueify}
            onFocus={this.inputFocus}
            onKeyPress={this.inputKeyPress}
          />
          <CustomLabel error>{this.state.errorMessage}</CustomLabel>
          <Button type="submit">Unique-ify!</Button>
        </form>
        <MainDiv hide={!this.state.uniquefiedString}>
          <LineBlock />
          <CustomLabel uniqueLabel>Unique letters found:</CustomLabel>
          <CustomLabel uniqueResult>{this.state.uniquefiedString}</CustomLabel>
        </MainDiv>
      </MainDiv>
    );
  }
}

export default Main;
