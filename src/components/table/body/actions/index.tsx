import { TableActions } from 'interfaces/table';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import styles from './styles.module.scss';

interface props {
  actions: TableActions[];
  setEditMode: (id: string) => void;
  handleDelete: (id: string) => void;
  rowId: string;
  editMode: string;
  small?: boolean;
}

const RowActions = ({
  actions,
  handleDelete,
  setEditMode,
  rowId,
  editMode,
  small,
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
      </div>
    </td>
  );
};

export default RowActions;
