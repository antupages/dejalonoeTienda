import React from "react"

export default class Clase extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    };
    
    
    sumarUno=()=>{
        this.setState({count:this.state.count +1});
    };
    restarUno=()=>{
        this.setState({count:this.state.count -1});
    };











    render(){
        return(
            <div>
                <h1>Contador : {this.state.conut}</h1>
                <button onClick={this.sumarUno}>+1</button>
                <button onClick={this.restarUno}>-1</button>
            </div>
        )
            
    }

}
