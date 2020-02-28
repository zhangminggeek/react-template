import React, { Fragment } from 'react';
import styles from './index.less';
import PublicHeader from '../components/PublicHeader';
import PublicMenu from '../components/PublicMenu';

const BasicLayout: React.FC = props => {
  return (
    <Fragment>
      <div className={styles.gHeader}>
        <PublicHeader />
      </div>
      <div className={styles.gMenu}>
        <PublicMenu />
      </div>
      <div className={styles.gContent}>
        { props.children }
      </div>
    </Fragment>
  );
};

export default BasicLayout;
