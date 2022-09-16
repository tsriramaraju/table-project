import TableHead from 'components/table/head';
import { ColumnConfig, TableRowData } from 'interfaces/table';
import { useState } from 'react';
import TableBody from '..';
import styles from './styles.module.scss';

interface props {
  content: TableRowData[];
  config: ColumnConfig;
  parentRowIndex: number;
}

const Leaf = ({ config, content, parentRowIndex }: props) => {
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortedData, setSortedData] = useState(content);

  const handleSort = (key: string) => {
    setSortKey(key);
    if (sort === 'default') {
      setSort('desc');
      setSortedData(
        [...content].sort((a, b) => {
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
        [...content].sort((a, b) => {
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
      setSortedData(content);
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
          small
        />
        <TableBody
          parentRowIndex={parentRowIndex}
          setData={setSortedData}
          config={config}
          data={sortedData}
        />
      </table>
    </div>
  );
};

export default Leaf;
