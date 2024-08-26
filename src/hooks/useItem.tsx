import { createContext, ReactNode, useContext, useState } from "react"
import { IItem } from "../interfaces/Item"

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
      id: '1',
      name: 'Animais',
      children: [
        {
          id: '2',
          name: 'Mamíferos',
          children: [
            { id: '3', name: 'Carnívoros', children: [] },
            { id: '4', name: 'Herbívoros', children: [] }
          ]
        },
        {
          id: '5',
          name: 'Aves',
          children: []
        }
      ]
    }
  ];

  const [items, setItems] = useState<IItem[]>(initialItems);

  function addItem(parentId?: string) {
    const newItem: IItem = {
      id: Date.now().toString(),
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