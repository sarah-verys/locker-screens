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

class OversizedParcel extends React.Component {

  render() {
    return (
      <Layout sidePadding="double" marginTop="less-5">

        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <img className={ `${s.marginTop}` }src="oversized.png" />
          </div>
          <div className={ `${s.right}` }>
            <h1 className="orangeTitle left">OVERSIZED PARCEL</h1>
            <h2 className="sansSerifSubTitle left">Deliver to <strong>Management Office</strong></h2>
            <Button className={ `${ s.packageButton }` } to="/courierscan">MORE PARCELS</Button>
            <Button className={ `${ s.packageButton }` } to="/thankyou">I'M FINISHED</Button>
          </div>
        </div>
      </Layout>
    );
  }

}

export default OversizedParcel;
