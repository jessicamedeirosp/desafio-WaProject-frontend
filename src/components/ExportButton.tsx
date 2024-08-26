import { useItem } from '../hooks/useItem';
import styles from '../css/ExportButton.module.css'

export function ExportButton()  {
  const { items } = useItem();

  function exportFileJSON() {
    const newBlob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
    const newUrl = URL.createObjectURL(newBlob);
    const linkElement = document.createElement('a');
    linkElement.href = newUrl;
    linkElement.download = 'animal.json';
    linkElement.click();
    URL.revokeObjectURL(newUrl);
  };

  return <button className={styles.export__button} onClick={exportFileJSON}>Baixar arquivo (JSON)</button>;
};

