import { useParams } from "react-router-dom";

export default function Horarios(){
    const params = useParams();
    console.log(params);
    return(
        <div className="horarios ">
            <span className="data">Quinta-feira - 24/06/2021</span>
            <div>
                <span className="horas">15:00</span>
                <span className="horas">15:00</span>
                <span className="horas">15:00</span>
            </div>
        </div>
    );
}