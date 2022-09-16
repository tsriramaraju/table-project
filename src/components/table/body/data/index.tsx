import { ColData, RowData } from 'interfaces/table';
import { ChangeEvent } from 'react';
import { priceFormatter } from 'utils/priceFormatter';
import styles from './styles.module.scss';

interface props {
  item: RowData;
  editMode: boolean;
  col: ColData;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RowContent = ({ item, col, editMode, onChange }: props) => {
  return (
    <td className={styles.value} key={item.key}>
      <div
        className={styles.content}
        onClick={
          item.link
            ? (e) => {
                e.stopPropagation();
                !editMode && window.open(item.link, '_blank');
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
        {editMode ? (
          <input
            type="text"
            className={styles.input}
            value={item.value}
            onChange={onChange}
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
};

export default RowContent;
