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

class LockerOpen extends React.Component {

  render() {
    return (
      <Layout sidePadding="triple" marginTop="less-5">
        <h1 className="orangeTitle left">LOCKER IS NOW OPEN</h1>
        <h2 className={ `sansSerifSubTitle ${s.h2}` }>Insert parcel into locker and close door when finished.</h2>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <Button className={ `${ s.packageButton }` } to="/courierscan">MORE PARCELS</Button>
            <Button className={ `${ s.packageButton }` } to="/thankyou">I'M FINISHED</Button>
          </div>
          <div className={ `${s.right}` }>
            <img src="big_back_arrow.png" />
          </div>
        </div>
      </Layout>
    );
  }

}

export default LockerOpen;
