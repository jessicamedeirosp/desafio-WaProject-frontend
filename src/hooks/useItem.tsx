import { createContext, ReactNode, useContext, useState } from "react"
import { IItem } from "../interfaces/Item"
import { v4 as uuidv4 } from 'uuid';

interface ItemContextProps {
  items: IItem[]
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
  addItem: (parentId?: string) => void
}

interface ItemProviderProps {
  children: ReactNode
}

const ItemContext = createContext<ItemContextProps>({} as ItemContextProps)

export function ItemProvider({ children }: ItemProviderProps) {
  const initialItems: IItem[] = [
    {
      id: 'f3992e31-1709-4f1e-a0cd-22b3623bb10f',
      name: 'Animais',
      children: [
        {
          id: 'dd289241-8614-4c63-a5f2-6bbc47adc968',
          name: 'Mamíferos',
          children: [
            { id: 'b2ec6f43-a0a2-4e56-9490-d5272acbb641', name: 'Carnívoros', children: [] },
            { id: '082b9d36-987f-4d15-a2ea-68f8f7e78fd1', name: 'Herbívoros', children: [] }
          ]
        },
        {
          id: 'ecc3fa7c-b679-4700-81de-4088016bc500',
          name: 'Aves',
          children: []
        }
      ]
    }
  ];

  const [items, setItems] = useState<IItem[]>(initialItems);

  function addItem(parentId?: string) {
    const newItem: IItem = {
      id: uuidv4(),
      name: '',
      children: []
    };

    if (!parentId) {
      setItems([...items, newItem]);
      return
    }

    setItems(addItemToParent(items, newItem, parentId));
  };

  function addItemToParent(list: IItem[], newItem: IItem, parentId?: string): IItem[] {
    return list.map((element) => {
      let newElement: IItem = element

      if (element.id === parentId) {
        newElement =  { 
          ...element, 
          children: [...element.children, newItem] 
        };
        return newElement
      }
      if (element.children) {
        newElement = { 
            ...element, 
            children: addItemToParent(element.children, newItem, parentId) 
        };
        return newElement
      }

      return newElement;
    });
  };


  const values = {
    items,
    setItems,
    addItem
  }

  return <ItemContext.Provider value={values}>
    {children}
  </ItemContext.Provider>
}

export const useItem = () => {
  return useContext(ItemContext)
}