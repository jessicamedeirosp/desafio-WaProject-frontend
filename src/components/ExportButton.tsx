import { useItem } from '../hooks/useItem';
import styles from '../css/ExportButton.module.css'
import { v4 as uuidv4 } from 'uuid';

export function ExportButton()  {
  const { items } = useItem();

  function exportFileJSON() {
    const newBlob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
    const newUrl = URL.createObjectURL(newBlob);
    const linkElement = document.createElement('a');
    linkElement.href = newUrl;

    linkElement.download = uuidv4() + '.json';
    linkElement.click();
    URL.revokeObjectURL(newUrl);
  };

  return <button className={styles.export__button} onClick={exportFileJSON}>Baixar arquivo (JSON)</button>;
};

