import { IItem } from "../interfaces/Item"
import { Form } from "./Form";

interface ItemProps {
  item: IItem 
  prefix: number
}

export function Item({item, prefix}: ItemProps) {
  return (
    <li key={item.id} className="hierarchy__item">
      <Form prefix={prefix} item={item} />
      {item.children && item.children.length > 0 && (
        <ul className="hierarchy__list">
          {item.children.map((child) => 
            <Item item={child} prefix={prefix + 1}/>
          )}
        </ul>
      )}
    </li>
  )
}