import { useItem } from "../hooks/useItem";
import { IItem } from "../interfaces/Item";

interface FormProps {
  item: IItem
  prefix: number
}

export function Form({item , prefix}: FormProps) {  
  const { addItem } = useItem();

  return (
    <>
      <span className="hierarchy__prefix">Nível {prefix}</span>
      <input
        type="text"
        value={item.name}       
        placeholder="Digite o nome do item"
        className="hierarchy__input"
      />
      <button className="hierarchy__button" onClick={() => addItem(item.id)}>
        Nível {prefix + 1} - Adicionar item
      </button>
    </>
  );
};

