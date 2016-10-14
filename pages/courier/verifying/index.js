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

class VerifyingPage extends React.Component {
  reloadOnQueue() {
    setTimeout(function() {
      window.location.href = '/courierscan'
    }, 250)
  }
  render() {
    this.reloadOnQueue()
    return (
      <Layout marginTop="more-5" sidePadding="double">
        <div className={s.verifying}>
          <h1 className="center sansSerifTitle">Verifying, Please Wait.....</h1>
        </div>
      </Layout>
    );
  }

}

export default VerifyingPage;
