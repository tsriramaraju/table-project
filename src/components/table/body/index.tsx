import { TableConfig, TableRowData } from 'interfaces/table';
import { useState } from 'react';
import { priceFormatter } from 'utils/priceFormatter';
import RowActions from './actions';
import styles from './styles.module.scss';

interface props {
  config: TableConfig;
  data: TableRowData[];

  setData: (data: TableRowData[]) => void;
}

const TableBody = ({ config, data, setData }: props) => {
  const [editMode, setEditMode] = useState('');
  const handleDelete = (id: string) => {
    const newData = [...data].filter((item) => item.id !== id);

    setData(newData);
  };
  return (
    <tbody className={styles.body}>
      {data.map((row, rowIndex) => (
        <tr
          key={row.id}
          className={`${styles.row} ${editMode === row.id && styles.edit}`}
        >
          {row.data.map((item, index) => {
            const key = config.columns.find(
              (configItem) => configItem.key === item.key
            );

            if (!key) return <td key={index}></td>;

            return (
              <td className={styles.value} key={item.key}>
                <div
                  className={styles.content}
                  onClick={
                    item.link
                      ? (e) => {
                          e.stopPropagation();
                          editMode !== row.id &&
                            window.open(item.link, '_blank');
                        }
                      : undefined
                  }
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.value.toString()}
                      className={styles.image}
                    />
                  )}
                  {editMode === row.id ? (
                    <input
                      type="text"
                      className={styles.input}
                      value={item.value}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[rowIndex].data[index].value = key.format
                          ? +e.target.value
                          : e.target.value;
                        setData(newData);
                      }}
                    />
                  ) : (
                    <p className={`${styles.text} ${item.link && styles.link}`}>
                      {!key.format
                        ? item.value
                        : key.format === 'currency'
                        ? priceFormatter(+item.value, false)
                        : key.format === 'percent'
                        ? `${item.value}%`
                        : key.format === 'date'
                        ? new Date(item.value).toLocaleDateString()
                        : item.value}
                    </p>
                  )}
                </div>
              </td>
            );
          })}
          {config.actions && (
            <RowActions
              actions={config.actions}
              handleDelete={handleDelete}
              setEditMode={setEditMode}
              rowId={row.id}
              editMode={editMode}
            />
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
