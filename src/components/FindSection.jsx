import React, { Component } from "react";
import Form from "./Form";
import inputs from "../inputs.js";
import util from "../utilityFunctions";
import data from "../data";
import DonorDisplay from "./DonorDisplay";

export default class FindSection extends Component {
  state = {
    bloodGroup: "",
    state: "",
    district: "",
    donors: [],
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
    // Do Basic Form Validation
    const { name, value } = target;
    const error = this.state.error;
    const errorMsg = "Please Choose From The Dropdown";

    if (name === "bloodGroup") {
      error[name] =
        data.bloodGroups.indexOf(value) === -1 && value !== "" ? errorMsg : "";
    }
    if (name === "state") {
      error[name] =
        data.states.indexOf(value) === -1 && value !== "" ? errorMsg : "";
    }
    if (name === "district") {
      error[name] =
        (data.districts[this.state.state] || []).indexOf(value) === -1 &&
        value !== ""
          ? errorMsg
          : "";
    }

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
      )
    };
  };

  sendDonors = () => {
    for (const er in this.state.error) {
      if (this.state.error.hasOwnProperty(er)) {
        if (this.state.error[er] !== "") {
          return [];
        }
      }
    }

    const { bloodGroup: b, state: s, district: d } = this.state;
    // make server call and find the donors array

    return b === "" ? [] : donors.filter(don => don.bloodGroup === b);
  };

  render() {
    return (
      <div className="findSection">
        <Form
          inputSuggetion={this.giveInputSuggetion()}
          inputValues={{ ...this.state }}
          onChange={this.handleInputChange}
          className={"form--big"}
          inputs={inputs.filter(i => i.section === "search")}
          onBlur={this.handleInputBlur}
          error={this.state.error}
        />
        <DonorDisplay donors={this.sendDonors()} />
      </div>
    );
  }
}

const donors = [
  {
    name: "Shobhan Biswas",
    bloodGroup: "A+",
    age: 23,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8584942395",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8584942395",
    email: "shobhan.biswas11@gmail.com"
  },
  {
    name: "Jon Doe",
    bloodGroup: "A-",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Jane dow",
    bloodGroup: "AB+",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Sam",
    bloodGroup: "O+",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Saikat Biswas",
    bloodGroup: "O-",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Saikat Biswas",
    bloodGroup: "B+",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Saikat Biswas",
    bloodGroup: "B-",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  },
  {
    name: "Saikat Biswas",
    bloodGroup: "O+",
    age: 27,
    gender: "male",
    state: "West Bengal",
    district: "Kolkata",
    adress: "Patuli, Ghoshpara",
    phoneNumber: "8001183565",
    alternatePhoneNumber: "7044527129",
    whatsappNumber: "8001183565",
    email: "saikat.biswas145@gmail.com"
  }
];
