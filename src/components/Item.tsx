import { IItem } from "../interfaces/Item"
import { Form } from "./Form";
import styles from '../css/Hierarchy.module.css'

interface ItemProps {
  item: IItem 
  prefix: number
}

export function Item({item, prefix}: ItemProps) {
  return (
    <li key={item.id} className={styles.hierarchy__item}>
      <Form prefix={prefix} item={item} />
      {item.children && item.children.length > 0 && (
        <ul className={styles.hierarchy__list}>
          {item.children.map((child) => 
            <Item key={child.id} item={child} prefix={prefix + 1}/>            
          )}
        </ul>
      )}
    </li>
  )
}