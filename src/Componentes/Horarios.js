import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";

export default function Horarios(){
    const params = useParams();
    
    const [sessoes, setSessao] = useState({days:[]});

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${params.idFilme}/showtimes`);

        promise.then(resp => {
            setSessao(resp.data);
        });

    }, []);
    console.log(sessoes);
    const {
        days
    } = sessoes;
    
    days.map((day) => (console.log(day)));
    
    
    return(
        <div className="horarios ">
            
            {
                days.map((day) => (
                    <>
                        <span className="data">{day.weekday} - {day.date}</span>
                        <div>
                            {
                                day.showtimes.map((showtime) =>(
                                    <>
                                        <Link to={`/assentos/${showtime.id}`} className="linkzin">
                                            <span className="horas">{showtime.name}</span>
                                        </Link>
                                    </>
                                ))
                            }
                        </div>
                    </>
                ))

            }
            
        </div>
    );
}