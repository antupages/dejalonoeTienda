import React, {useState, usestate} from "react";





function Funcional () {

	const[contar, setcntar]= useState(0)
	
	const sumarUno=()=>{
		setcntar(contar+1);
	}
	
	const restarUno=()=>{
		setcntar(contar-1);
	}
	
	
	
	
	
	return(
		<div>
			
			<h1> Contador {contar}</h1>
			<button onClick={sumarUno}>+1</button>
            <button onClick={restarUno}>-1</button>




		</div>		
	)	
}

export default Funcional;
