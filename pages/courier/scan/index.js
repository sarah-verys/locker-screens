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

class ScanPage extends React.Component {

  render() {
    return (
      <Layout marginTop="more-5" sidePadding="double">
        <h1 className="orangeTitle center">PLEASE SCAN PARCEL</h1>
        <div className={`${s.verifying} center`}>
          <img src="barcode.png" />
        </div>
        <div className={ `${s.row}` }>
          <div className={ `${s.left}` }>
            <div className={ `pageBack ${s.back}` }>
              <Button to="/courierpickup"><img src="orange_back_arrow.png" />Back</Button>
            </div>
          </div>
          <div className={ `${s.right}` }>
            <div className={ `pageBack ${s.skip}` }>
              <Button to="/courierenterlocation">Skip Scan</Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

export default ScanPage;
