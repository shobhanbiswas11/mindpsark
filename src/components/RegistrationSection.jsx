import React, { Component } from "react";
import Form from "./Form";
import inputs from "../inputs";
import util from "../utilityFunctions";
import data from "../data";

const Slogan = () => {
  return (
    <h1 className="slogan">
      Find The Hero In you{" "}
      <span className="nl">
        Register Yourself as a <span className="thin color">Blood Donor</span>
      </span>
    </h1>
  );
};

export default class RegistrationSection extends Component {
  state = {
    name: "",
    bloodGroup: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    adress: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    whatsappNumber: "",
    email: "",
    error: {}
  };

  handleInputChange = (e, nameValue) => {
    // Set The state
    if (nameValue) {
      this.setState({
        [nameValue.name]: nameValue.value
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleInputBlur = ({ target }) => {
    const { name } = target;

    const error = { ...this.state.error };
    const errorMsg = "Fill it";

    inputs.forEach(i => {
      if (i.madatory && i.name === name) {
        error[i.name] = this.state[i.name] === "" ? errorMsg : "";
      }
    });

    this.setState({ error });
  };

  giveInputSuggetion = () => {
    return {
      bloodGroup: util.modifyArrayByTheWord(
        this.state.bloodGroup,
        data.bloodGroups
      ),
      state: util.modifyArrayByTheWord(this.state.state, data.states),
      district: util.modifyArrayByTheWord(
        this.state.district,
        data.districts[this.state.state]
      ),
      gender: ["male", "female", "other"],
      whatsappNumber:
        this.state.phoneNumber !== "" ? [this.state.phoneNumber] : ""
    };
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const error = { ...this.state.error };
    const errorMsg = "Fill it";

    inputs.forEach(i => {
      if (i.madatory) {
        error[i.name] = this.state[i.name] === "" ? errorMsg : "";
      }
    });

    // if there is n error send the value to the server
    try {
      for (const er in error) {
        if (error[er] !== "") throw new Error("There is an error");
      }
      // Here I have to send the value to the server
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }

    this.setState({ error });
  };

  render() {
    return (
      <div className="registrationSection">
        <Slogan />
        <Form
          inputSuggetion={this.giveInputSuggetion()}
          inputValues={{ ...this.state }}
          onSubmit={this.handleFormSubmit}
          onChange={this.handleInputChange}
          className={"form--small"}
          inputs={inputs.filter(i => i.section === "registration")}
          onBlur={this.handleInputBlur}
          error={this.state.error}
        >
          <button type="submit" className="btn btn--registration">
            Register
          </button>
        </Form>
      </div>
    );
  }
}
