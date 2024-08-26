import { useItem } from '../hooks/useItem';
import { Item } from './Item';

export function Hierarchy() {
  const { items } = useItem();

  return ( 
    <div className="hierarchy__container">
      <ul className="hierarchy__list no-space-left">
        {items.map((item) => 
          <Item key={item.id} item={item} prefix={1}/>
        )}
      </ul>    
    </div>
  );
};
