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
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import s from './styles.css';

class HomePage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.row}>
          <div className={s.left}>
            <h1 className="orangeTitle">Welcome</h1>
            <h2 className="sansSerifSubTitle">To begin, please make a selection.</h2>
          </div>
          <div className={`${s.right}`}>
            <Button className={`${s.parcelPickup} bankGothic`} to="/parcelpickup">PARCEL PICKUP</Button>
          </div>
        </div>
        <div className={s.row}>
          <div className={`${s.left}`}>
            <Button className="grayButton" to="/courierpickup">COURIER DELIVERY</Button>
          </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
