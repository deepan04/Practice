import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);  // Mandatory to call the parent constructor with props

    // Because of the fact that the "this" keyword will refer to the function
    // being called instead of the object, any functions you define by yourself
    // will need to bind the this keyword.
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);

    // initial state
    this.state = {name: "Jane", age: 20};
  }

  changeName(value) {
    this.setState({name: value});
  }

  changeAge(value) {
    this.setState({age: value});
  }

  render() {
    // First we pass the name and age state to the Welcome component
    // so Welcome will update if our name and age updates
    // then we pass down the functions that update the
    // name and age to NameAgeInput so it can call these functions itself
    return (<div>
    <Welcome name={this.state.name} age={this.state.age} />
    <NameAgeInput namechange={this.changeName} agechange={this.changeAge} />
    </div>);
  }
}


class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello {this.props.name}, you are {this.props.age} years old.</h1>;
  }
}

class NameAgeInput extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }
  
  onNameChange(event) {
    this.props.namechange(event.target.value);
    // this.props.namechange is the App class' changeName function as passed down
  }

  onAgeChange(event) {
    this.props.agechange(event.target.value);
  }

  render() {
      return (<div>
      Name: <input onChange={this.onNameChange} type="text" />
      Age: <input onChange={this.onAgeChange} type="number" />
      </div>);
  }
}
export default App;
