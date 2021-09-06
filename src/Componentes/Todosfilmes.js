import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";

export default function Todosfilmes(){
    const [image, setImage] = useState([]);
    
    useEffect(()=> {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
       
        promise.then(resp => {
            setImage([...resp.data]);
        });

    }, []);

    console.log(image);

    return (
        <div class="estado">

            {
                image.map((img) => (
                    <Link to={`/sessoes/${img.id}`}>
                        <div class="filmes">
                            <img src={`${img.posterURL}`}/>
                        </div>
                    </Link>
                ))
            }
            
            

        </div>
    );
}