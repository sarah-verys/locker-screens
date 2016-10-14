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
import s from './NumberPad.css'

class NumberPad extends React.Component {

  static propTypes = {
    prompt: PropTypes.string,
    nextPage: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      number: ''
    }
    this.inputNumber = this.inputNumber
    this.popNumber = this.popNumber
  }

  inputNumber(i) {
    var newNumber = this.state.number.concat(i)
    this.setState({number: newNumber})
  }

  popNumber () {
    var newNumber = this.state.number.slice(0, -1)
    this.setState({number: newNumber})
  }

  render() {
    const { prompt, nextPage } = this.props
    return (
      <div>
        <h1 className="orangeTitle center">{ prompt }</h1>
        <div className={ s.numberInput }>{ this.state.number }</div>
        <div className={ s.numberPad }>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '1') }>1</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '4') }>4</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '7') }>7</button>
          </div>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '2') }>2</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '5') }>5</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '8') }>8</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '0') }>0</button>
          </div>
          <div className={ s.row }>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '3') }>3</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '6') }>6</button>
            <button className={ s.numberButton } onClick={ this.inputNumber.bind(this, '9') }>9</button>
          </div>
          <div className={ s.row }>
            <button className={ s.backspace } onClick={ this.popNumber.bind(this) }><img src="back_arrow.png" /></button>
            <div className={ s.enter }>
              <Button to={ nextPage }>ENTER</Button>
            </div>
          </div>
        </div>
        <div className="pageBack">
          <Button to="/"><img src="orange_back_arrow.png" />Back</Button>
        </div>
      </div>
    );
  }

}

export default NumberPad;
