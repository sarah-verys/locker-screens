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
        <h1>Welcome</h1>
        <h2>To Begin, please make a selection.</h2>
        <Button to="/parcelpickup">PARCEL PICKUP</Button>
        <Button to="/courierpickup">COURIER DELIVERY</Button>
      </Layout>
    );
  }

}

export default HomePage;
