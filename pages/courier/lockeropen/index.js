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

class CourierLockerOpenPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <h1>Locker is now open</h1>
        <h2>Please remove parcel from open locker and close door when finished.</h2>
        <img src="big_back_arrow.png" />
        <Button to="/parcelpickup">MORE PARCELS</Button>
        <Button to="/courierpickup">I'M FINISHED</Button>
      </Layout>
    );
  }

}

export default CourierLockerOpenPage;
