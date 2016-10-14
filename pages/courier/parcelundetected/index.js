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

class ParcelUndetected extends React.Component {

  render() {
    return (
      <Layout sidePadding="triple" marginTop="less-5">
        <h1 className="orangeTitle left">PARCEL NOT DETECTED</h1>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <Button className={ `${ s.packageButton }` } to="/courierscan">NEED DIFFERENT SIZE LOCKER</Button>
            <Button className={ `${ s.packageButton }` } to="/courierparceldelivered">PARCEL DELIVERED</Button>
          </div>
          <div className={ `${s.right}` }>
            <img className={ `${s.marginTop}` } src="caution.png" />
          </div>
        </div>
      </Layout>
    );
  }

}

export default ParcelUndetected;
