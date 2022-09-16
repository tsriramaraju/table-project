import { ColumnConfig, TableRowData } from 'interfaces/table';
import { useState } from 'react';
import RowActions from './actions';
import RowContent from './data';
import Leaf from './leaf';
import styles from './styles.module.scss';

interface props {
  config: ColumnConfig;
  data: TableRowData[];
  leafConfig?: ColumnConfig;
  setData: (data: TableRowData[]) => void;
  parentRowIndex?: number;
}

const TableBody = ({
  config,
  data,
  setData,
  leafConfig,
  parentRowIndex,
}: props) => {
  const [editMode, setEditMode] = useState('');
  const [toggle, setToggle] = useState('');
  const handleDelete = (id: string) => {
    const newData = [...data].filter((item) => item.id !== id);

    setData(newData);
  };
  return (
    <tbody className={styles.body}>
      {data.map((row, rowIndex) => (
        <>
          <tr
            key={row.id}
            className={`${styles.row} ${editMode === row.id && styles.edit} ${
              parentRowIndex !== undefined && styles.small
            } `}
            onClick={(e) => {
              e.stopPropagation();
              setToggle(toggle === row.id ? '' : row.id);
            }}
          >
            {config.columns.map((col, index) => {
              const keyIndex = row.data.findIndex(
                (item) => item.key === col.key
              );

              if (keyIndex === -1)
                return (
                  <td
                    className={`${styles.value} ${
                      parentRowIndex !== undefined && styles.small
                    }`}
                    key={index}
                  ></td>
                );
              const item = row.data[keyIndex];

              return (
                <RowContent
                  key={index}
                  item={item}
                  small={parentRowIndex !== undefined}
                  col={col}
                  editMode={editMode === row.id}
                  onChange={(e) => {
                    console.log(rowIndex);
                    console.log('index', index);
                    const newData = [...data];
                    if (
                      parentRowIndex !== undefined &&
                      newData[parentRowIndex] &&
                      newData[parentRowIndex].leaf
                    ) {
                      // @ts-ignore
                      newData[parentRowIndex].leaf[rowIndex].data[index].value =
                        col.format ? +e.target.value : e.target.value;
                    } else {
                      newData[rowIndex].data[index].value = col.format
                        ? +e.target.value
                        : e.target.value;
                    }
                    setData(newData);
                  }}
                />
              );
            })}
            {config.actions && (
              <RowActions
                actions={config.actions}
                handleDelete={handleDelete}
                setEditMode={setEditMode}
                rowId={row.id}
                small={parentRowIndex !== undefined}
                editMode={editMode}
              />
            )}
          </tr>
          <tr key={row.id + row.id}>
            {row.leaf && leafConfig && (
              <td
                colSpan={config.columns.length + 1}
                className={`${styles.innerRow} ${
                  toggle === row.id && row.leaf && leafConfig && styles.expand
                }`}
              >
                <Leaf
                  parentRowIndex={rowIndex}
                  content={row.leaf}
                  config={leafConfig}
                />
              </td>
            )}
          </tr>
        </>
      ))}
    </tbody>
  );
};

export default TableBody;
