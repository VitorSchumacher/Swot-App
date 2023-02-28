import React, { FC, useContext, useState, createContext } from "react";

interface IContext {
  areas: IAreas[];
  addItens: (item: IAreas) => void;
  removeItem: (id:number) => void;
}

interface IAreas {
  id: number;
  name: string;
}

interface IChildren {
  children: React.ReactNode;
}

export const ItemsContext = createContext({} as IContext);

export const AreasContex: FC<IChildren> = ({ children }) => {
  const [areas, setAreas] = useState<IAreas[]>([]);

  const addItens = (item: IAreas) => {
    setAreas([...areas, item]);
  };

  const removeItem = (id: number) => {
    let newItens = areas.filter(areas => areas.id !== id);
    setAreas(newItens);
  };

  return (
    <ItemsContext.Provider value={{ areas, addItens, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useAreas = () => {
  return useContext(ItemsContext);
};
