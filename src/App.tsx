import { Hierarchy } from './components/Hierarchy';
import { ExportButton } from './components/ExportButton';
import { ItemProvider } from './hooks/useItem';

function App() { 
  return (
    <ItemProvider>
      <div className='container'>
        <div className='hierarchy__group'>
          <h1 className='hierarchy__title'>Hierarquia</h1>
          <ExportButton />
        </div>
        <Hierarchy />
      </div>
    </ItemProvider>
  );
};

export default App;
