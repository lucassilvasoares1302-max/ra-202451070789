
import { createContext, useContext } from 'react';

export const UsinasContext = createContext(null);

export function useUsinas() {
  const contexto = useContext(UsinasContext);

  if (!contexto) {
    throw new Error(
      'useUsinas deve ser utilizado dentro de UsinasProvider.'
    );
  }

  return contexto;
}
