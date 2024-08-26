import { useItem } from '../hooks/useItem';
import { Item } from './Item';
import styles from '../css/Hierarchy.module.css'

export function Hierarchy() {
  const { items } = useItem();

  return ( 
    <div className={styles.hierarchy__container}>
      <ul className={`${styles.hierarchy__list} ${styles['no-space-left']}`}>
        {items.map((item) => 
          <Item key={item.id} item={item} prefix={1}/>
        )}
      </ul>    
    </div>
  );
};
