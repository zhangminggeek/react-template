import React from 'react';
import styles from './index.less';
import { connect } from 'umi';

const Index = () => {
  return (
    <div>
      <h1 className={styles.title}>index</h1>
    </div>
  );
};

export default connect()(Index);
