import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

export const App = () => {
    var faker = require('faker');
    const funcaoOK= () => alert("Obrigado por avisar");
    const funcaoNOK = () => alert("iremos ver");
    const textoOK = "Recebi";
    const textoNOK = "Ainda nao recebi";
    const feedbackJSX = <Feedback textoOK={textoOK} textoNOK = {textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} />;

//     return (
//         <div className="container border rounded mt-2">
//             <div className="row border-bottom m-2">
//                 <h1 className="display-5 text-center">Seus pedidos</h1>
//             </div>

//             <div className="row">
//                 <div className="col-sm-8 col-md-6 m-2">
//                     <Cartao cabecalho="22/04/2021">
//                         <Pedido icone="fas fa-hdd fa-2x" titulo = "SSD" descricao = "SSD Kingstone" />
//                         {feedbackJSX}
//                     </Cartao>
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col-sm-8 col-md-6 m-2">
//                     <Cartao cabecalho="20/03/2021">
//                         <Pedido icone="fas fa-book fa-2x" titulo = "Livro" descricao = "Alice in the Wonderland" />
//                         {feedbackJSX}
//                     </Cartao>
//                 </div>
//             </div>

            
//             <div className="row">
//                 <div className="col-sm-8 col-md-6 m-2">
//                     <Cartao cabecalho="18/02/2021">
//                         <Pedido icone="fas fa-laptop fa-2x" titulo = "Kingstone" descricao = "AAAAAAAAA" />
//                         {feedbackJSX}
//                     </Cartao>    
//                 </div>
//             </div>


//         </div>
//     )

        return (
            <div className="container border rounded mt-2">
                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        <Cartao> 
                            <Pedido icone={faker.internet.avatar()} titulo = {faker.internet.userName()} descricao = {faker.lorem.words(30)} />
                            <Feedback textoOK="Aprovar" textoNOK = "Não Aprovar" funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} />
                        </Cartao>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        <Cartao> 
                            <Pedido icone={faker.internet.avatar()} titulo = {faker.internet.userName()} descricao = {faker.lorem.words(30)} />
                            <Feedback textoOK="Aprovar" textoNOK = "Não Aprovar" funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} />
                        </Cartao>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        <Cartao> 
                            <Pedido icone={faker.internet.avatar()} titulo = {faker.internet.userName()} descricao = {faker.lorem.words(30)} />
                            <Feedback textoOK="Aprovar" textoNOK = "Não Aprovar" funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} />
                        </Cartao>
                    </div>
                </div>
            </div>

)

}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)