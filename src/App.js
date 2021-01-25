import React from 'react';


//variables are the same of the index.js file

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


function App(props){
  
    if(props.bool) return (
      <div style={{color: 'blue'}}>
        <div>{element}</div>
        <hr/>
        <div>
          {funcao}
        </div>
        <hr/>
        <h1>Everything above in <span style={{color:'magenta'}}>blue</span> was builded by a function exported by an external file hehe :D</h1>
      </div>
    );
    else return <h1>FALSyany</h1>;
  }
export default App;