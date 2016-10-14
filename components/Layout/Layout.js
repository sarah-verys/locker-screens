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
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    hideHeader: PropTypes.string,
    marginTop: PropTypes.String,
    sidePadding: PropTypes.String
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    var containerStyles = {
      top: '25vh',
      height: 'calc(100vh - 25vh)',
      padding: '0 40px'
    }

    if (this.props.marginTop == 'less-10') {
      containerStyles.top = '15vh'
      containerStyles.height = 'calc(100vh - 15vh)'
    } else if (this.props.marginTop == 'less-5') {
      containerStyles.top = '20vh'
      containerStyles.height = 'calc(100vh - 10vh)'
    } else if (this.props.marginTop == 'more-5') {
      containerStyles.top = '30vh'
      containerStyles.height = 'calc(100vh - 30vh)'
    } else if (this.props.marginTop == 'more-10') {
      containerStyles.top = '35vh'
      containerStyles.height = 'calc(100vh - 35vh)'
    }

    if (this.props.sidePadding == 'double') {
      containerStyles.padding = '0 80px'
    } else if (this.props.sidePadding == 'triple') {
      containerStyles.padding = '0 120px'
    }


    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          {
            this.props.hideHeader
            ? null
            : <Header />
          }
          <main style={containerStyles} id="main-container" className="mdl-layout__content">
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
