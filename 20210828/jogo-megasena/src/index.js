import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import ListGroup from 'react-bootstrap/ListGroup'
 import Card from 'react-bootstrap/Card'
import { thisExpression } from '@babel/types';

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            jogo : null,
            mensagemErro: null
        }

    }

    gerarJogo = () => {
        let aux = []
        while (aux.length < 6){
            let n = Math.floor((Math.random() * 60) + 1);
            if (!aux.includes(n)) aux.push(n)
        }
        this.setState({jogo: aux.sort(function(a, b){return a - b})})
    }

    render(){
        // this.obterLocalizacao()
        // let texto = 'Clique no botão para saber a sua estação climática'
        // if (this.state.lat)
        //     texto = `Coordenadas: ${this.state.lat}, ${this.state.lng}.Data: ${this.state.data}`

        return(
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="p-2">
                            <Card.Header>
                                Gerador de numeros
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center border rounded" style={{height: '8rem'}}>
                                {
                                    this.state.jogo ?

                                    <ListGroup horizontal>
                                        {
                                        this.state.jogo.map(numero => (
                                            <ListGroup.Item variant="success">{numero}</ListGroup.Item>
                                        ))
                                        }
                                        {/* <ListGroup.Item>{this.state.jogo[0]}</ListGroup.Item>
                                        <ListGroup.Item>{this.state.jogo[1]}</ListGroup.Item>
                                        <ListGroup.Item>{this.state.jogo[2]}</ListGroup.Item>
                                        <ListGroup.Item>{this.state.jogo[3]}</ListGroup.Item>
                                        <ListGroup.Item>{this.state.jogo[4]}</ListGroup.Item>
                                        <ListGroup.Item>{this.state.jogo[5]}</ListGroup.Item> */}
                                    </ListGroup>
                                    :
                                    <Card.Text className="fs-4"> 
                                        Clique o botão parar gerar jogo
                                    </Card.Text>
                                }
                                <Button onClick={() => this.gerarJogo()}  variant='outline-success'> 
                                    Clique aqui para gerar jogo
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>


            // <div className="container mt-2">
            //     <div className="row justify-content-center">
            //         <div className="col-md-8">
            //             <div className="card">
            //                 <div className="card-body">
            //                     <div className="d-flex align-items-center border mb-2">
            //                         <p className="w-75 ms-3 text-center fs-1">Gerado de jogos para mega sena!</p>
            //                     </div>
            //                     <div className="d-flex align-items-center border mb-2">
            //                     <ListGroup horizontal>
            //                         <ListGroup.Item>{this.state[0]}</ListGroup.Item>
            //                         <ListGroup.Item>{this.state[1]}</ListGroup.Item>
            //                         <ListGroup.Item>{this.state[2]}</ListGroup.Item>
            //                         <ListGroup.Item>{this.state[3]}</ListGroup.Item>
            //                         <ListGroup.Item>{this.state[4]}</ListGroup.Item>
            //                         <ListGroup.Item>{this.state[5]}</ListGroup.Item>
            //                     </ListGroup>
            //                     </div>
            //                     <div className="d-flex align-items-center border mb-2">
            //                         <button onClick={() => this.gerarJogo()} className="btn btn-outline-primary w-100 mt-2">Gere numeros</button>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)