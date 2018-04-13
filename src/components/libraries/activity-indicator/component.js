import React from 'react';
import { styles } from './styles';
import preloaderImage from './assets/loading.png';

export const ActivityIndicator = () => (
  <div style={styles.container}>
    <img src={preloaderImage} alt="Loading..." />
  </div>
);
export default ActivityIndicator;

