import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import CustomBackdrop from '@components/CustomBackdrop/CustomBackdrop';

const DEFAULT_STATE = false;

interface IBackdropControl {
  backdropVisibility: boolean;
  setBackdropVisibility: Dispatch<SetStateAction<boolean>>;
}

const BackdropContext = createContext<IBackdropControl | null>(null);

const BackdropContextProvider = ({ children }: any) => {
  const [backdropVisibility, setBackdropVisibility] =
    useState<boolean>(DEFAULT_STATE);

  const contextValue = useMemo(
    () => ({
      backdropVisibility,
      setBackdropVisibility,
    }),
    [backdropVisibility]
  );

  return (
    <BackdropContext.Provider value={contextValue!}>
      <CustomBackdrop open={contextValue.backdropVisibility} />
      {children}
    </BackdropContext.Provider>
  );
};

function useBackdropState() {
  let context = useContext(BackdropContext);

  if (context === null) {
    throw Error('Contexto Não definido');
  }

  return context;
}

export { useBackdropState, BackdropContextProvider };
