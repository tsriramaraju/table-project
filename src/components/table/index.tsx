import { capitalize } from 'utils/capitalize';
import { TableConfig, TableData } from '../../interfaces/table';
import { FaSort } from 'react-icons/fa';
import styles from './styles.module.scss';
import TableHead from './head';
import { useState } from 'react';

interface props {
  config: TableConfig;
  data: TableData[][];
}

const Table = ({ config, data }: props) => {
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (key: string) => {
    setSortKey(key);
    if (sort === 'default') {
      setSort('asc');
      setSortedData(
        [...data].sort((a, b) => {
          const aIndex = a.findIndex((item) => item.key === key);
          const bIndex = b.findIndex((item) => item.key === key);
          console.log('aIndex', aIndex);
          if (a[aIndex].value < b[bIndex].value) {
            return 1;
          }

          return -1;
        })
      );
    } else if (sort === 'asc') {
      setSort('desc');
      setSortedData(
        [...data].sort((a, b) => {
          const aIndex = a.findIndex((item) => item.key === key);
          const bIndex = b.findIndex((item) => item.key === key);
          console.log('aIndex', aIndex);
          if (a[aIndex].value < b[bIndex].value) {
            return -1;
          }

          return 1;
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
        <tbody className={styles.body}>
          {sortedData.map((item, index) => (
            <tr key={index} className={styles.row}>
              {item.map((item, index) => (
                <td className={styles.value} key={item.key}>
                  {item.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
