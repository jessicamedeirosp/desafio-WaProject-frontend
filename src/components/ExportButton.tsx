import { useItem } from '../hooks/useItem';

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

  return <button className="export__button" onClick={exportFileJSON}>Salvar JSON</button>;
};

