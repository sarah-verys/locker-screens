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
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import s from './styles.css';

class SelectRecipient extends React.Component {
  static PropTypes = {}

  constructor() {
    super()
    const names = [
      'Jonathan Putnam',
      'Liam Horne',
      'Marina Batukayev',
      'Safiya Abboud',
      'Heidi Lopez',
      'Jim Eliasson',
      'Guan-yu Lin',
      'Paulo Correia',
      'Jessie Wallace',
      'Valerie Logue',
      'Dan Kropf',
      'Lorna J. Grant',
      'Tanja Kaestner',
      'Petra Loewe',
      'Rosanna Udinesi',
      'Katsuma Inoue',
      'Syed McGregor',
      'Phan Thuyen',
      'Edwin Movrin',
      'Daniel Colman',
      'Jamie Leahy',
      'Tilda Burris',
      'Nicole Garcia',
      'Cameron Buncle',
      'Jacob Horrocks',
      'Eva Babbidge',
      'Jun Meng'
    ]
    this.state = {
      names: this.getRandomNames(names, 7)
    }
    this.getRandomNames = this.getRandomNames
  }

  getRandomNames (names, total) {
    let randomNames = [], randomIndex;

    while (total) {
      randomIndex = Math.floor(Math.random()*names.length)
      console.warn(randomIndex,names[randomIndex])
      randomNames = randomNames.concat(names.splice(randomIndex, 1))
      total--
    }

    return randomNames
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className="orangeTitle">PLEASE SELECT RECIPIENT</h1>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[0] }</Button>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[1] }</Button>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[2] }</Button>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[3] }</Button>
            <div className={ s.numberInput }></div>
          </div>
          <div className={ `${s.right}` }>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[4] }</Button>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[5] }</Button>
            <Button className={ `${ s.numberInput }` } to="/courierselectlocker">{ this.state.names[6] }</Button>
            <div className={ s.numberInput }></div>
            <div className={ s.numberInput }></div>
            <Button id={ `${s.notFound}` }className={ `${ s.numberInput } orangeButton` } to="/courierenterlocation">NOT FOUND</Button>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <div className={ `pageBack ${s.back}` }>
              <Button to="/courierenterlocation"><img src="orange_back_arrow.png" />Back</Button>
            </div>
          </div>
          <div className={ `${s.right}` }>
            <div className={ `pageBack ${s.skip}` }>
              <Button to="/courierselectlocker">Next<img className={ `${s.nextImg}` } src="forawrd_button_orange.png" /></Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

export default SelectRecipient;
