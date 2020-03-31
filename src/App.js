import React, { Component } from 'react';
import './App.css';

// Components
import Display from './components/Display/Display';
import ClearButton from './components/ClearButton/ClearButton';
import OperationButton from './components/OperationButton/OperationButton';
import NumberButton from './components/NumberButton/NumberButton';
import ZeroButton from './components/ZeroButton/ZeroButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0,
      workingNum: 0,
      operation: ''
    };
  }

  // onClick Handlers
  clickNumberHandler = (num) => {
    console.log("clickNumberHandler fired", num);
    const newNum = "" + this.state.displayNum + num
    this.setState({
      displayNum: parseInt(newNum)
    })
  }

  clickOperationHandler = (operation) => {
    console.log("clickOperationHandler fired", operation);
    this.setState({
      workingNum: this.state.displayNum,
      displayNum: 0,
      operation
    })
  }

  clickEqualHandler = () => {
    let displayNum = 0;
    if (this.state.operation === 'add') {
      displayNum = this.state.workingNum + this.state.displayNum
    } else if (this.state.operation === 'sub') {
      displayNum = this.state.workingNum - this.state.displayNum
    } else if (this.state.operation === 'mult') {
      displayNum = this.state.workingNum * this.state.displayNum
    } else if (this.state.operation === 'div') {
      displayNum = this.state.workingNum / this.state.displayNum
    } else {
      this.setState({
        displayNum: "Error..."
      })
    }
    this.setState({
      displayNum,
      workingNum: 0,
      operation: ''
    })
  }

  clickClearHandler = () => {
    this.setState({
      displayNum: 0,
      workingNum: 0,
      operation: ''
    })
  }

  handleKeyPress = (e) => {
    console.log("handleKeyPress fired");
    console.log("keyCode:", e.keyCode);
    console.log("shiftKey", e.shiftKey);
    let input;
    if (e.shiftKey) {
      switch(e.keyCode) {
        case 61:
          input = 'add'
          break;
        default:
          break;
      }
    } else {
      switch (e.keyCode) {
        case 48:
          input = 0;
          break;
        case 49:
          input = 1;
          break;
        case 50:
          input = 2;
          break;
        case 51:
          input = 3;
          break;
        case 52:
          input = 4;
          break;
        case 53:
          input = 5;
          break;
        case 54:
          input = 6;
          break;
        case 55:
          input = 7;
          break;
        case 56:
          input = 8;
          break;
        case 57:
          input = 9;
          break;
        case 61:
          input = 'eq';
          break;
        case 173:
          input = 'min';
          break;
        case 191:
          input = 'div';
          break;
        case 13:
          input = 'eq';
          break;
        default:
          break;
      }
    }
    if (typeof input === 'number') {
      this.clickNumberHandler(input)
    } else if (typeof input === 'string'){
      console.log("Input:", input);
      if (input === 'eq') {
        this.clickEqualHandler()
      } else {
        this.clickOperationHandler(input)
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }


  render() {
    return (
      <div className={'main__container'}>
        <Display number={this.state.displayNum} />
        <ClearButton click={this.clickClearHandler}/>
        <OperationButton type={'div'} click={() => this.clickOperationHandler('div')} />
        <NumberButton num={7} click={() => this.clickNumberHandler(7)} />
        <NumberButton num={8} click={() => this.clickNumberHandler(8)} />
        <NumberButton num={9} click={() => this.clickNumberHandler(9)} />
        <OperationButton type={'mult'} click={() => this.clickOperationHandler('mult')} />
        <NumberButton num={4} click={() => this.clickNumberHandler(4)} />
        <NumberButton num={5} click={() => this.clickNumberHandler(5)} />
        <NumberButton num={6} click={() => this.clickNumberHandler(6)} />
        <OperationButton type={'sub'} click={() => this.clickOperationHandler('sub')} />
        <NumberButton num={1} click={() => this.clickNumberHandler(1)} />
        <NumberButton num={2} click={() => this.clickNumberHandler(2)} />
        <NumberButton num={3} click={() => this.clickNumberHandler(3)} />
        <OperationButton type={'add'} click={() => this.clickOperationHandler('add')} />
        <ZeroButton click={() => this.clickNumberHandler(0)} />
        <OperationButton type={"eq"} click={this.clickEqualHandler} />
      </div>
    );
  }

}

export default App;
