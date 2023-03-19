import { render } from "@testing-library/react";
import React from "react";


export default class Cronometro extends React.Component{
    constructor (props){
        super(props);
        console.log("(1) el componente se inic ializo pero no se monto al dom");
        this.state={
            hora: new Date().toLocaleTimeString(),
        };
        this.temporizador=null;
        
    }
    
    componentDidMount(){
        console.log(" (3) el componente se monto al DOM ")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("(4) el estado o las props cambiaron ");
        console.log(prevProps);
        console.log(prevState);
    }




    reloj=()=>{
        this.temporizador = setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString(),
            });  
        }, 1000)
    };
    
    comenzar=()=>{
        this.reloj();
    };
    
        
    parar=()=>{
        clearInterval(this.temporizador);
    };
    
    
    
    
    
    render(){
        console.log("se pinto o re pinto el componente en el DOM ")
        return(
            <div>
                <h1>Cronometro</h1>
                <h2>son las : {this.state.hora}</h2>
                <button onClick={this.comenzar}>Comenzar</button>
                <button onClick={this.parar}>Parar</button>
            </div>
        )
    }
}