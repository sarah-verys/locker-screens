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
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import s from './styles.css';

class ThankYouPage extends React.Component {
  reloadOnQueue() {
    setTimeout(function() {
      window.location.href = '/'
    }, 3000)
  }
  render() {
    this.reloadOnQueue()
    return (
      <Layout className={`${s.content} center`} hideHeader={ true }>
        <img src="pp_logo.png" />
        <h1 className="sansSerifTitle">Thank you for using our service</h1>
      </Layout>
    );
  }

}

export default ThankYouPage;
