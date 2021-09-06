import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";

export default function Assentos(){
    const params = useParams();
    console.log(params);
    const [assentos, setAssentos] = useState({day:{}, seats:[], movie:{} });

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${params.idSessao}/seats`)

        promise.then(resp =>{
            setAssentos(resp.data);
        });
    },[]);



    return(
        <>
            <div className="sala-cinema ">
                    {
                        assentos.seats.map((seat,index) => (<div class="poltrona">{(index > 8)? seat.name : "0"+seat.name}</div>))
                    }
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
                    <input type="text" placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador:</span>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                </div>
                <div class="reserva ">
                    <span>Reservar assento(s)</span>
                </div>
        </>

    );
}