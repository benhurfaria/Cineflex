import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Assentos from "./Componentes/Assentos";
import Horarios from "./Componentes/Horarios";
import Situacao from "./Componentes/Situacao";
import Sucesso from "./Componentes/Sucesso";
import Todosfilmes from "./Componentes/Todosfilmes";
import Topo from "./Componentes/Topo";
import "./Estilos/style.css";
import "./Estilos/reset.css";

function App(){
    return(
        <>
            <BrowserRouter>

                <Topo/>

                <Situacao/>
            
                <Switch>

                    <Route path="/" exact>
                        <Todosfilmes/>
                    </Route>

                    <Route path="/sessoes/:idFilme" exact>
                        <Horarios />
                    </Route>

                    <Route path="/assentos/:idSessao" exact>
                        <Assentos/>
                    </Route>

                    <Route path="/sucesso" exact>
                        <Sucesso/>
                    </Route>

                </Switch>

            </BrowserRouter>
        </>
    );
}
const Paragrafo = styled.p`
    font-weight: 400;
    
`;
ReactDOM.render(<App/>, document.querySelector(".root"));