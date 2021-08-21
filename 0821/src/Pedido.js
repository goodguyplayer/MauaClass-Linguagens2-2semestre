import React from 'react'

const Pedido = (props) => {
    return (
            <div className="d-flex">
                <div className="d-fex align-items-center">
                    <img src={props.icone}/>
                </div>
                <div className="flex-grow-1 ms-2 border rounded">
                    <h4 className="text-left">{props.titulo}</h4>
                    <p className="text-left"> {props.descricao} </p>
                </div>

            </div>
            
    )
}

export default Pedido
