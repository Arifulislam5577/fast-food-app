import { createContext, useState } from "react";
export const DataContext = createContext();

const DataProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <DataContext.Provider value={{ setCart, cart }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
