import React from 'react';

export default function Assento(props){
    const{
        seat,
        index,
        available,
        setAssentosSelecionados,
        assentosSelec,

    } = props;

    const{
        name, 
        isAvailable
    } = seat;
    
    const [status, setStatus] = React.useState("poltrona "+available);
    
    
    function seleciona(){
        if(status === "poltrona seleciona") {
            setStatus("poltrona "+available);
            assentosSelec(seat.id, "tirar", name);
            return;
        }
        if(isAvailable) {
            setStatus("poltrona seleciona");
            assentosSelec(seat.id, "colocar", name);
        } else {
            alert("Esse assento não está disponivel");
        }
    }

    return (
        <>
            <div class={`${status}`} onClick={seleciona}>{(index > 8)? name : "0"+name}</div>
        </>
    );
}