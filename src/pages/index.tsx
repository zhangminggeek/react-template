import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';

export default () => {
  const { loading } = useModel('@@initialState');

  return (
    <div>
      <h1 className={styles.title}>index</h1>
      <p>{process.env.TEST_ENV}</p>
    </div>
  );
};
