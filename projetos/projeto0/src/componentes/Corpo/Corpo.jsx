import './Corpo.css'
import Botao_custom from '../Botao_custom/Botao_custom';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import BotaoContador from '../BotaoContador/BotaoContador';
import { useState } from 'react';
import Formulario from '../Formulario/Formulario';
const Corpo = () => {
  const [exemplo, setExemplo] = useState('')
  const mudar = () => {
    setExemplo()
  }
  return (
    <main>
      <Botao_custom tipo='secundario' onClick={() => setExemplo('ListaProdutos')}>Lista Produtos</Botao_custom>
      <Botao_custom onClick={() => setExemplo('BotaoContador')}>Botão Contador</Botao_custom>
      <Botao_custom onClick=

      {exemplo === 'ListaProdutos' && <ListaProdutos />}
      {exemplo === 'BotaoContador' && <BotaoContador />}

      <Formulario />

    </main>
  );
};
export default Corpo;
