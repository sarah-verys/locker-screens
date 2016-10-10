/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../components/Layout';
import NumberPad from '../../../components/NumberPad';
import s from './styles.css';

class CourierPickupPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <NumberPad prompt="Please Enter Courier Code" nextPage="/courierlockeropen"></NumberPad>
      </Layout>
    );
  }

}

export default CourierPickupPage;
