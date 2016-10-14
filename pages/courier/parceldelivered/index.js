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

class ParcelDelivered extends React.Component {

  render() {
    return (
      <Layout sidePadding="triple" marginTop="more-10">
        <div className={ `${s.row} center` }>
            <Button className={ `${ s.packageButton }` } to="/courierscan">MORE PARCELS</Button>
            <Button className={ `${ s.packageButton }` } to="/thankyou">I'M FINISHED</Button>
        </div>
      </Layout>
    );
  }

}

export default ParcelDelivered;
