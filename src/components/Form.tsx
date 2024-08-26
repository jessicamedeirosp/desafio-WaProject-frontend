import { useItem } from "../hooks/useItem";
import { IItem } from "../interfaces/Item";
import styles from '../css/Form.module.css'

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

  function getColorButton() {
    const level = prefix + 1
    const red = (level * 60) % 256;
    const green = (level * 110) % 256;
    const blue = (level * 160) % 256;
    
    return `rgba(${red}, ${green}, ${blue}, 0.80)`;
  }
  return (
    <>
      {/* <span className={styles.hierarchy__prefix}>Nível {prefix}</span> */}
      <button 
        style={{ backgroundColor: getColorButton() }}
        className={styles.hierarchy__button} 
        onClick={() => addItem(item.id)}>
         Adicionar item ao Nível {prefix + 1}
      </button>
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleItemChange(item.id, e.target.value)}
        placeholder="Digite o nome do item"
        className={styles.hierarchy__input}
      />     
    </>
  );
};

