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
import AlphaNumericPad from '../../../components/AlphaNumericPad';
import s from './styles.css';

class EnterLocationPage extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <AlphaNumericPad nextPage="/courierselectrecipient"></AlphaNumericPad>
      </Layout>
    );
  }

}

export default EnterLocationPage;
