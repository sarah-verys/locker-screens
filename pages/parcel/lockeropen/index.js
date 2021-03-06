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
// import router from '../../../core/router';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import s from './styles.css';

class ParcelLockerOpenPage extends React.Component {
  reloadOnQueue() {
    setTimeout(function() {
      window.location.href = 'thankyou'
    }, 2500)
  }
  render() {
    this.reloadOnQueue()
    // router.resolve('thankyou')
    return (
      <Layout className={s.content}>
        <h1 className="orangeTitle">Locker is now open</h1>
        <h2 className="sansSerifSubTitle">Please remove parcel from open locker and close door when finished.</h2>
        <div className="right">
          <img src="big_back_arrow.png" />
        </div>
      </Layout>
    );
  }

}

export default ParcelLockerOpenPage;
