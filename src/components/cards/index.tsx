import styles from './styles.module.scss';

interface props {
  title: string;
  value: string;
}

const Cards = ({}: props) => {
  return <div className={styles.container}></div>;
};

export default Cards;
