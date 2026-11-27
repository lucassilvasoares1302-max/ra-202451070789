
import { useState, useEffect } from 'react';
import { UsinasContext } from './UsinasContext';
import { buscarUsinas } from '../services/usinasService';

export default function UsinasProvider({ children }) {
  const [usinas, setUsinas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarDados() {
      setCarregando(true);
      setErro(null);

      try {
        const dados = await buscarUsinas(controller.signal);
        setUsinas(dados);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErro(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarDados();

    return () => controller.abort();
  }, [tentativa]);

  function tentarNovamente() {
    setTentativa(anterior => anterior + 1);
  }

  return (
    <UsinasContext.Provider
      value={{
        usinas,
        carregando,
        erro,
        tentarNovamente
      }}
    >
      {children}
    </UsinasContext.Provider>
  );
}
