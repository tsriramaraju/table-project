import { TableActions } from 'interfaces/table';
import {
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiSave,
  FiTrash2,
} from 'react-icons/fi';
import styles from './styles.module.scss';

interface props {
  actions: TableActions[];
  setEditMode: (id: string) => void;
  handleDelete: (id: string) => void;
  rowId: string;
  editMode: string;
  small?: boolean;
  leaf: boolean;
  toggled: boolean;
}

const RowActions = ({
  actions,
  handleDelete,
  setEditMode,
  rowId,
  editMode,
  small,
  leaf,
  toggled,
}: props) => {
  return (
    <td className={styles.value}>
      <div
        className={`${styles.actionsContainer} ${
          editMode === rowId && styles.edit
        } ${small && styles.small}`}
      >
        {actions.includes('Edit') && editMode === rowId ? (
          <FiSave
            className={`${styles.icon} ${editMode === rowId && styles.edit} ${
              small && styles.small
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setEditMode('');
            }}
          />
        ) : (
          <FiEdit
            className={`${styles.icon} ${editMode === rowId && styles.edit} ${
              small && styles.small
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setEditMode(rowId);
            }}
          />
        )}
        {actions.includes('Delete') && (
          <FiTrash2
            onClick={() => handleDelete(rowId)}
            className={`${`${styles.icon} ${
              editMode === rowId && styles.edit
            }`} ${small && styles.small}`}
          />
        )}
        {leaf ? (
          !toggled ? (
            <FiChevronDown
              className={`${`${styles.icon} ${
                editMode === rowId && styles.edit
              }`} ${small && styles.small}`}
            />
          ) : (
            <FiChevronUp
              className={`${`${styles.icon} ${
                editMode === rowId && styles.edit
              }`} ${small && styles.small}`}
            />
          )
        ) : null}
      </div>
    </td>
  );
};

export default RowActions;
