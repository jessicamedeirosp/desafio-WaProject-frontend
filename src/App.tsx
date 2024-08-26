import { Hierarchy } from './components/Hierarchy';
import { ExportButton } from './components/ExportButton';
import { ItemProvider } from './hooks/useItem';
import styles from './css/App.module.css'

function App() { 
  return (
    <ItemProvider>
      <div className={styles.container}>
        <div className={styles.hierarchy__group}>
          <h1 className={styles.hierarchy__title}>Hierarquia</h1>
          <ExportButton />
        </div>
        <Hierarchy />
      </div>
    </ItemProvider>
  );
};

export default App;
