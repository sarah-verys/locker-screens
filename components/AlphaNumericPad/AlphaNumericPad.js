/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Button from '../Button';
import cx from 'classnames';
import s from './AlphaNumericPad.css'

class AlphaNumericPad extends React.Component {

  static propTypes = {
    nextPage: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      buildingNumber: '',
      unitNumber: '',
      selected: 'unit'
    }
    this.setInput = this.setInput
    this.inputNumber = this.inputNumber
    this.popNumber = this.popNumber
  }

  setInput(selected) {
    console.log('setInput', selected)
    this.setState({ selected })
  }

  inputNumber(i) {
    console.log(this.state.selected)
    if (this.state.selected == 'building') {
      var newNumber = { buildingNumber: this.state.buildingNumber.concat(i) }
    } else {
      var newNumber = { unitNumber: this.state.unitNumber.concat(i) }
    }
    this.setState(newNumber)
  }

  popNumber () {
    if (this.state.selected == 'building') {
      var newNumber = { buildingNumber: this.state.buildingNumber.slice(0, -1) }
    } else {
      var newNumber = { unitNumber: this.state.unitNumber.slice(0, -1) }
    }
    this.setState(newNumber)
  }

  render() {
    const { nextPage } = this.props
    return (
      <div>
        <div className={ s.pageInputs }>
          <h2>BUILDING:</h2>
          <div className={ this.state.selected == 'building' ? `${s.numberInput} ${s.active}`: `${s.numberInput}` } onClick={ this.setInput.bind(this, 'building') }>{ this.state.buildingNumber }</div>
          <h2>UNIT:</h2>
          <div className={ this.state.selected == 'unit' ? `${s.numberInput} ${s.active}`: `${s.numberInput}` } onClick={ this.setInput.bind(this, 'unit') }>{ this.state.unitNumber }</div>
        </div>
        <div className={ s.numberPad }>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '1') }>1</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '2') }>2</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '3') }>3</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '4') }>4</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '5') }>5</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '6') }>6</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '7') }>7</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '8') }>8</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '9') }>9</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '0') }>0</button>
            <button className={ s.backspace } onClick={ this.popNumber.bind(this) }><img src="back_arrow.png" /></button>
          </div>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'Q') }>Q</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'W') }>W</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'E') }>E</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'R') }>R</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'T') }>T</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'Y') }>Y</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'U') }>U</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'I') }>I</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'O') }>O</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'P') }>P</button>
          </div>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'A') }>A</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'S') }>S</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'D') }>D</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'F') }>F</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'G') }>G</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'H') }>H</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'J') }>J</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'K') }>K</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'L') }>L</button>
            <button className={ s.enter }>
              <Button to={ nextPage }>ENTER</Button>
            </button>
          </div>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'Z') }>Z</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'X') }>X</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'C') }>C</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'V') }>V</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'B') }>B</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'N') }>N</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, 'M') }>M</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '-') }>-</button>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="pageBack">
          <Button to="/courierscan"><img src="orange_back_arrow.png" />Back</Button>
        </div>
      </div>
    );
  }

}

export default AlphaNumericPad;
