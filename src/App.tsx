import React from 'react';
import Table from './components/table';
import {
  leafConfigData,
  tableConfigData,
  tableData,
} from './data/tableContent';
import styles from './scss/app.module.scss';
function App() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        Welcome back
        <span className={styles.span}>Amanda</span>
      </h1>

      <Table
        config={tableConfigData}
        data={tableData}
        leafConfig={leafConfigData}
      />
    </div>
  );
}

export default App;
