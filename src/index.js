import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Situacao from "./Componentes/Situacao";
import Topo from "./Componentes/Topo";

function App(){
    return(
        <>
        <BrowserRouter>
            <Topo/>
            <Situacao/>
            
                
                    <div class="estado escondido">
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                        <div class="filmes">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAwjg447aVf8Ca-AWoTuZHAPW1dWmTorINpnTZAY8swRj--Rbu"/>
                        </div>
                    </div>
                
                <div class="horarios escondido">
                    <span class="data">Quinta-feira - 24/06/2021</span>
                    <div>
                        <span class="horas">15:00</span>
                        <span class="horas">15:00</span>
                        <span class="horas">15:00</span>
                    </div>
                </div>
                <div className="sala-cinema escondido">
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>
                    <div class= "poltrona">01</div>

                </div>
                <div class="status escondido">
                    <div class="selecionado"></div>
                    <div class="disponivel"></div>
                    <div class="indisponivel"></div>
                </div>
                <div class="status-palavra escondido">
                    <span>Selecionado</span>
                    <span>Disponível</span>
                    <span>Indisponível</span>
                </div>
                <div class="inputs escondido">
                    <span>Nome do comprador:</span>
                    <input type="text" placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador:</span>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                </div>
                <div class="reserva escondido">
                    <span>Reservar assento(s)</span>
                </div>

                <div class="tela4">
                    <p>Filme e sessão</p>
                    <div class="dados">
                        <h1>Enola Holmes</h1>
                        <h2>24/06/2021 15:00</h2>
                    </div> 
                    <p>Ingressos</p>
                    <div class="dados">
                        <h1>Assento 15</h1>
                        <h2>Assento 16</h2>
                    </div>    
                    <p>Comprador</p>
                    <div class="dados">
                        <h1>Nome: João da Silva Sauro</h1>
                        <h2>CPF: 029.374.861-69</h2>
                    </div>              
                </div>

                <div class="reserva">
                    <span>Voltar para Home</span>
                </div>
        </BrowserRouter>


        </>
    );
}
const Paragrafo = styled.p`
    font-weight: 400;
    
`;
ReactDOM.render(<App/>, document.querySelector(".root"));