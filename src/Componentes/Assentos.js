import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Assento from './Assento';
// let ids=[];
const mandarDados = {
  ids: [],
  name: '',
  cpf: '',
};
export default function Assentos(props) {
  const params = useParams();
  const { setarDados, setarDiaHora } = props;

  const [assentos, setAssentos] = useState({
    day: {},
    seats: [],
    movie: {},
    name: {},
  });
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);
  const [nomeComprador, setNomeComprador] = useState('');
  const [cpfComprador, setCpfComprador] = useState('');

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${params.idSessao}/seats`,
    );

    promise.then((resp) => {
      setAssentos(resp.data);
    });
  }, []);

  function retirar(arr, idA) {
    if (idA === arr) return false;
    return true;
  }

  function assentosSelec(idA, acao) {
    if (acao === 'colocar') {
      mandarDados.ids.push(idA);
    } else {
      mandarDados.ids = mandarDados.ids.filter((arr) => retirar(arr, idA));
    }
  }
  setarDiaHora(assentos.day.date, assentos.name);

  function verNome() {
    mandarDados.name = nomeComprador;
    mandarDados.cpf = cpfComprador;
    setarDados(mandarDados.ids, mandarDados.name, mandarDados.cpf);
    const promessa = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many',
      mandarDados,
    );
  }
  return (
    <>
      <div className="sala-cinema ">
        {assentos.seats.map((seat, index) => (
          <Assento
            seat={seat}
            index={index}
            available={seat.isAvailable ? 'dispon' : 'indispon'}
            setAssentosSelecionados={setAssentosSelecionados}
            assentosSelec={assentosSelec}
          />
        ))}
      </div>
      <div class="status ">
        <div class="selecionado"></div>
        <div class="disponivel"></div>
        <div class="indisponivel"></div>
      </div>
      <div class="status-palavra ">
        <span>Selecionado</span>
        <span>Disponível</span>
        <span>Indisponível</span>
      </div>
      <div class="inputs ">
        <span>Nome do comprador:</span>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={nomeComprador}
          onChange={(e) => setNomeComprador(e.target.value)}
        ></input>
        <span>CPF do comprador:</span>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          value={cpfComprador}
          onChange={(e) => setCpfComprador(e.target.value)}
        ></input>
      </div>
      <Link to="/sucesso">
        <div class="reserva " onClick={verNome}>
          <span>Reservar assento(s)</span>
        </div>
      </Link>
      <div className="bottom">
        <div className="moldura">
          <img src={`${assentos.movie.posterURL}`} />
        </div>
        <div className="nomeFilme">{assentos.movie.title}</div>
      </div>
    </>
  );
}
