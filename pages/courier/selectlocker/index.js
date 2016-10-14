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

class SelectLocker extends React.Component {

  render() {
    return (
      <Layout sidePadding="triple" marginTop="less-5">
        <h1 className="orangeTitle center">PLEASE SELECT LOCKER SIZE</h1>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <Button className={ `${ s.packageButton }` } to="/courierlockeropen">SMALL</Button>
            <Button className={ `${ s.packageButton }` } to="/courierlockeropen">MEDIUM</Button>
          </div>
          <div className={ `${s.right}` }>
            <Button className={ `${ s.packageButton }` } to="/courierlockeropen">LARGE</Button>
            <Button className={ `${ s.packageButton }` } to="/courierparcelundetected">X-LARGE</Button>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className={ `${s.row}` }>
          <Button className={ `${ s.packageButton }` } to="/courieroversizedparcel">OVERSIZED</Button>
        </div>
        <div className="clearfix"></div>
        <div className={ `${s.row} ${s.marginTop}` }>
          <div className={ `pageBack` }>
            <Button to="/courierselectrecipient"><img src="orange_back_arrow.png" />Back</Button>
          </div>
        </div>
      </Layout>
    );
  }

}

export default SelectLocker;
