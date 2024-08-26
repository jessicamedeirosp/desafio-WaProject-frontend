import { IItem } from "../interfaces/Item"

interface ItemProps {
  item: IItem 
  prefix: number
}

export function Item({item, prefix}: ItemProps) {
  return (
    <li key={item.id} className="hierarchy__item">
      <span className="hierarchy__prefix">Nível {prefix}</span>
      <input
        type="text"
        value={item.name}       
        placeholder="Digite o nome do item"
        className="hierarchy__input"
      />
      <button className="hierarchy__button">
        Nível {prefix + 1} - Adicionar item
      </button>
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