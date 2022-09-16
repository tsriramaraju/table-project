import { ColData, RowData } from 'interfaces/table';
import { ChangeEvent } from 'react';
import { priceFormatter } from 'utils/priceFormatter';
import styles from './styles.module.scss';

interface props {
  item: RowData;
  editMode: boolean;
  col: ColData;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  small?: boolean;
}

const RowContent = ({ item, col, editMode, onChange, small }: props) => {
  return (
    <td className={`${styles.value} ${small && styles.small}`} key={item.key}>
      <div className={`${styles.content} ${small && styles.small}`}>
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
          <p
            onClick={
              item.link
                ? (e) => {
                    e.stopPropagation();
                    !editMode && window.open(item.link, '_blank');
                  }
                : undefined
            }
            className={`${styles.text} ${item.link && styles.link}`}
          >
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
