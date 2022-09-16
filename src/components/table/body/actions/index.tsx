import { TableActions } from 'interfaces/table';
import { FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import styles from './styles.module.scss';

interface props {
  actions: TableActions[];
  setEditMode: (id: string) => void;
  handleDelete: (id: string) => void;
  rowId: string;
  editMode: string;
}

const RowActions = ({
  actions,
  handleDelete,
  setEditMode,
  rowId,
  editMode,
}: props) => {
  return (
    <td className={styles.value}>
      <div className={styles.actionsContainer}>
        {actions.includes('Edit') && editMode === rowId ? (
          <FaSave className={styles.icon} onClick={() => setEditMode('')} />
        ) : (
          <FaEdit className={styles.icon} onClick={() => setEditMode(rowId)} />
        )}
        {actions.includes('Delete') && (
          <FaTrash
            onClick={() => handleDelete(rowId)}
            className={styles.icon}
          />
        )}
      </div>
    </td>
  );
};

export default RowActions;
