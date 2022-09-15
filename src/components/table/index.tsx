import { TableConfig } from '../../interfaces/table';
import styles from './styles.module.scss';

interface props {
  config: TableConfig;
}

const Table = ({ config }: props) => {
  return <div className={styles.container}></div>;
};

export default Table;
