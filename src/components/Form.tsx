import { useItem } from "../hooks/useItem";
import { IItem } from "../interfaces/Item";

interface FormProps {
  item: IItem
  prefix: number
}

export function Form({item, prefix}: FormProps) {  
  const { items, setItems, addItem } = useItem();

  function updateItem(list: IItem[], id: string, newName: string): IItem[]  {
    return list.map((element) => {    
      let newElement = element

      if (element.id === id) {
        newElement = { 
          ...element, 
          name: newName 
        };
        return newElement
      }

      if (element.children) {
        newElement = { 
          ...element, 
          children: updateItem(element.children, id, newName) 
        };
        return newElement
      }

      return newElement;
    });
  };

  function handleItemChange(id: string, newName: string) {
    setItems(updateItem(items, id, newName));
  }; 

  return (
    <>
      <span className="hierarchy__prefix">Nível {prefix}</span>
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleItemChange(item.id, e.target.value)}
        placeholder="Digite o nome do item"
        className="hierarchy__input"
      />
      <button className="hierarchy__button" onClick={() => addItem(item.id)}>
        Nível {prefix + 1} - Adicionar item
      </button>
    </>
  );
};

