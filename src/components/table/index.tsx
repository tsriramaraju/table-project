import { ColumnConfig, TableRowData } from '../../interfaces/table';
import styles from './styles.module.scss';
import TableHead from './head';
import { useState } from 'react';
import TableBody from './body';

interface props {
  config: ColumnConfig;
  data: TableRowData[];
  leafConfig?: ColumnConfig;
}

const Table = ({ config, data, leafConfig }: props) => {
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (key: string) => {
    setSortKey(key);
    if (sort === 'default') {
      setSort('desc');
      setSortedData(
        [...data].sort((a, b) => {
          const aIndex = a.data.findIndex((item) => item.key === key);
          const bIndex = b.data.findIndex((item) => item.key === key);
          if (aIndex === -1 || bIndex === -1) return 0;
          if (a.data[aIndex].value < b.data[bIndex].value) {
            return -1;
          } else return 1;
        })
      );
    } else if (sort === 'desc') {
      setSort('asc');
      setSortedData(
        [...data].sort((a, b) => {
          const aIndex = a.data.findIndex((item) => item.key === key);
          const bIndex = b.data.findIndex((item) => item.key === key);
          if (aIndex === -1 || bIndex === -1) return 0;
          if (a.data[aIndex].value < b.data[bIndex].value) {
            return 1;
          } else return -1;
        })
      );
    } else {
      setSort('default');
      setSortedData(data);
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <TableHead
          sortKey={sortKey}
          sort={sort}
          handleSort={handleSort}
          config={config}
        />
        <TableBody
          leafConfig={leafConfig}
          setData={setSortedData}
          config={config}
          data={sortedData}
        />
      </table>
    </div>
  );
};

export default Table;
