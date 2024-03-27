import './Corpo.css'
import Botao_custom from '../Botao_custom/Botao_custom';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import BotaoContador from '../BotaoContador/BotaoContador';
const Corpo = () => {
    return (
        <main>
          <Botao_custom
            tipo='primario'
            onClick={() => {
              alert('Salvo com sucesso!');
            }}
          >
            Salvar
          </Botao_custom>
          <Botao_custom tipo='secundario'>Git</Botao_custom>
        <Botao_custom>Cancelar</Botao_custom>
        <BotaoContador />
    
          <ListaProdutos />
        </main>
      );
    };
export default Corpo;
