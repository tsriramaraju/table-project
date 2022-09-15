import { TableConfig } from 'interfaces/table';
import { IconContext } from 'react-icons/lib';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { capitalize } from 'utils/capitalize';
import styles from './styles.module.scss';

interface props {
  config: TableConfig;
  handleSort: (key: string) => void;
  sort: 'asc' | 'desc' | 'default';
  sortKey: string;
}

const TableHead = ({ config, handleSort, sort, sortKey }: props) => {
  return (
    <thead className={styles.header}>
      <tr>
        {config.columns.map((item, index) => (
          <th
            className={styles.heading}
            key={item.key}
            style={{ width: item.width }}
          >
            <div className={styles.content}>
              <p className={styles.text}>{capitalize(item.name || item.key)}</p>
              {(item.sort === undefined || item.sort) && (
                <IconContext.Provider
                  value={{
                    className: styles.icon,
                  }}
                >
                  {sort === 'default' ? (
                    <FaSort onClick={() => handleSort(item.key)} />
                  ) : sort === 'desc' && sortKey === item.key ? (
                    <FaSortUp onClick={() => handleSort(item.key)} />
                  ) : sort === 'asc' && sortKey === item.key ? (
                    <FaSortDown onClick={() => handleSort(item.key)} />
                  ) : (
                    <FaSort onClick={() => handleSort(item.key)} />
                  )}
                </IconContext.Provider>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
