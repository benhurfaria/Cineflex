import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import Assento from "./Assento";

export default function Sucesso(props){
    const{
        assentos, 
        nome,
        cpf,
        filme,
        sessao,
        dia
    } = props;
    console.log(assentos);
    console.log(nome);
    console.log(cpf);
    return(
        <>
            <div class="tela4">
                <p>Filme e sessão</p>
                <div class="dados">
                    <h1>{filme}</h1>
                    <h2>{dia} {sessao}</h2>
                </div> 
                <p>Ingressos</p>
                <div class="dados">
                    {
                        assentos.map((assento) => (<h1>Assento {(assento%50 > 9)? assento%50 : "0"+assento%50}</h1>))
                    }
                </div>    
                <p>Comprador</p>
                <div class="dados">
                    <h1>Nome: {nome}</h1>
                    <h2>CPF: {cpf}</h2>
                </div>              
            </div>
            <Link to="/" className="linkzin">
                <div class="reserva">
                    <span>Voltar para Home</span>
                </div>
            </Link>
        </>
    );
}