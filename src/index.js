import React from 'react';
import ReactDOM from 'react-dom';

//exporting external files is suppa dubba easy

import App from "./App";

//the key is: create every compoenent in a single external file, as Header, for exemple:

import Header from "./Header";


const name = "Marquin";

const element = <h1>oie, {name}</h1>;

//aula 2 funções

const varFunc = {
  first: "React",
  second: "é doido demais"
};

const funcao = (
  <>
    <h2>
      Aqui recebemos uma função o <strong>output</strong> dela é:
    </h2>
      {funcaoReact(varFunc)}
    <hr/>
  </>
);

function funcaoReact(input){
  return <h3>{input.first} {input.second}</h3>
}

function TestFunction(props){
  
  if(props.bool) return (
    <div>
      <div>{element}</div>
      <hr/>
      <div>
        {funcao}
      </div>
      <hr/>
      <h1>Everything above was builded by a function :D</h1>
    </div>
  );
  else return <h1>FALSyany</h1>;


}

/* class Welcome extends ReactComponent {

  //to repeat
  render(){
    return 
  }
} */




ReactDOM.render(
  <>
    <Header/>
    <div>{element}</div>
    <hr/>
    <div>
      {funcao}
    </div>
    <TestFunction bool="true"/>
    <App bool="true"/>
  </>
  ,
  document.getElementById('root')
);


