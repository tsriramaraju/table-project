import { capitalize } from 'utils/capitalize';
import { TableConfig, TableData, TableRowData } from '../../interfaces/table';
import { FaEdit, FaPlusSquare, FaSort, FaTrash } from 'react-icons/fa';
import styles from './styles.module.scss';
import TableHead from './head';
import { useState } from 'react';

interface props {
  config: TableConfig;
  data: TableRowData[];
}

const Table = ({ config, data }: props) => {
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortedData, setSortedData] = useState(data);
  const [setEditMode, setSetEditMode] = useState('');

  const handleSort = (key: string) => {
    setSortKey(key);
    if (sort === 'default') {
      setSort('desc');
      setSortedData(
        [...data].sort((a, b) => {
          const aIndex = a.data.findIndex((item) => item.key === key);
          const bIndex = b.data.findIndex((item) => item.key === key);
          console.log('aIndex', aIndex);
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
          console.log('aIndex', aIndex);
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

  const handleDelete = (id: string) => {
    const newData = [...data].filter((item) => item.id !== id);

    setSortedData(newData);
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
              {item.data.map((item, index) => (
                <td className={styles.value} key={item.key}>
                  {item.value}
                </td>
              ))}
              {config.actions && (
                <td className={styles.value}>
                  <div className={styles.actionsContainer}>
                    {config.actions.includes('Add') && (
                      <FaPlusSquare className={styles.icon} />
                    )}
                    {config.actions.includes('Edit') && (
                      <FaEdit className={styles.icon} />
                    )}
                    {config.actions.includes('Delete') && (
                      <FaTrash
                        onClick={() => handleDelete(item.id)}
                        className={styles.icon}
                      />
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
