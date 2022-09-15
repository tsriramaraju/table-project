import { ReactElement, useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import animationData from '../assets/lottie/tablet.json';
import styles from './layout.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';

type props = {
  children?: ReactElement;
};

export const Layout = ({ children }: props) => {
  const [isCompatible, setCompatible] = useState(false);

  useEffect(() => {
    if (window.innerWidth / window.innerHeight < 1) {
      setCompatible(true);
    } else setCompatible(false);

    window.addEventListener('resize', () => {
      if (window.innerWidth / window.innerHeight < 1) {
        setCompatible(true);
      } else setCompatible(false);
    });
  }, []);

  return isCompatible ? (
    <div className={styles.tab}>
      <h1 className={styles.text}>
        Please use a large device for better experience
      </h1>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100%', width: '100%' }}
      ></Player>
    </div>
  ) : (
    <div className={styles.layout}>
      <div className={`${styles.navArea} `}>
        <Navbar />
      </div>
      <div className={`${styles.mainArea} `}>
        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
