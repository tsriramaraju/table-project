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
        <div
          className={styles.button}
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </div>
      </h1>

      <Table
        config={tableConfigData}
        data={tableData}
        leafConfig={leafConfigData}
      />

      <p className={styles.text}>
        This table is created from scratch using React, Typescript and SCSS.
        This table can be customized by adjusting config parameters. Any changes
        to the table data is not persisted in DB nor local storage.
      </p>
    </div>
  );
}

export default App;
