import { Hierarchy } from './components/Hierarchy';
import { ExportButton } from './components/ExportButton';
import { ItemProvider } from './hooks/useItem';


function App() { 
  return (
    <ItemProvider>
      <div className='container'>
        <div className='hierarchy-group'>
          <h1 className='hierarchy-title'>Hierarquia de Palavras</h1>
          <ExportButton />
        </div>
        <Hierarchy />
      </div>
    </ItemProvider>
  );
};

export default App;
