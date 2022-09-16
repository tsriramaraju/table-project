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
          {config.columns.map((col, index) => {
            const keyIndex = row.data.findIndex((item) => item.key === col.key);

            if (keyIndex === -1)
              return <td className={styles.value} key={index}></td>;
            const item = row.data[keyIndex];

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
                        newData[rowIndex].data[index].value = col.format
                          ? +e.target.value
                          : e.target.value;
                        setData(newData);
                      }}
                    />
                  ) : (
                    <p className={`${styles.text} ${item.link && styles.link}`}>
                      {!col.format
                        ? item.value
                        : col.format === 'currency'
                        ? priceFormatter(+item.value, false)
                        : col.format === 'percent'
                        ? `${item.value}%`
                        : col.format === 'date'
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
