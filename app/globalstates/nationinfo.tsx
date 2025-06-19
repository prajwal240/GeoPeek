'use client'
import { createContext, ReactNode, useState } from "react";

type ContextType = {
  flag: string;
  name: string;
  loc: string;
};

type NationContextType = {
  nationdata: ContextType;
  setNationdata: React.Dispatch<React.SetStateAction<ContextType>>;
};

const initialContext: NationContextType = {
  nationdata: {
    flag: 'https://flagcdn.com/w320/in.png',
    name: 'India',
    loc: 'https://maps.google.com/maps?q=India&output=embed',
  },
  setNationdata: () => { }
};

export const NationContext = createContext<NationContextType>(initialContext);

export const NationProvider = ({ children }: { children: ReactNode }) => {
  const [nationdata, setNationdata] = useState<ContextType>(initialContext.nationdata);

  return (
    <NationContext.Provider value={{ nationdata, setNationdata }}>
      {children}
    </NationContext.Provider>
  );
};
