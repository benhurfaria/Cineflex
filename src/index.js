import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Assentos from './Componentes/Assentos';
import Horarios from './Componentes/Horarios';
import Situacao from './Componentes/Situacao';
import Sucesso from './Componentes/Sucesso';
import Todosfilmes from './Componentes/Todosfilmes';
import Topo from './Componentes/Topo';
import './Estilos/style.css';
import './Estilos/reset.css';

function App() {
  const [assentos, setAssentos] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [assentSessao, setAssentSessao] = useState([]);
  const [filme, setFilme] = useState('');
  const [sessao, setSessao] = useState('');
  const [dia, setDia] = useState('');

  function setarDados(ids, name, cp, numero) {
    setAssentos(ids);
    setNome(name);
    setCpf(cp);
    setAssentSessao(numero);
  }

  function setarFilme(movie) {
    setFilme(movie);
  }
  function setarDiaHora(day, hora) {
    setDia(day);
    setSessao(hora);
  }

  return (
    <>
      <BrowserRouter>
        <Topo />

        <Situacao />

        <Switch>
          <Route path="/" exact>
            <Todosfilmes />
          </Route>

          <Route path="/sessoes/:idFilme" exact>
            <Horarios setarFilme={setarFilme} />
          </Route>

          <Route path="/assentos/:idSessao" exact>
            <Assentos setarDados={setarDados} setarDiaHora={setarDiaHora} />
          </Route>

          <Route path="/sucesso" exact>
            <Sucesso
              sessao={sessao}
              dia={dia}
              filme={filme}
              assentos={assentos}
              nome={nome}
              cpf={cpf}
              assentSessao={assentSessao}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('.root'));
