import React from "react";

class Keys extends React.Component{

    
    
    constructor(props){
        super(props);
        this.numbers = [1,2,3,4,5];
        /* alert(this.numbers); */
    }

    
    
    render(){
        return(
            <>
                <div style={{color:"mediumorchid"}}>
                    <h1>Keys Controllers</h1>
                    <Numberlist numbers={this.numbers}/>
                </div>
                <div style={{color:"greenyellow"}}>
                    <NumberlistKey numbers={this.numbers}/>
                </div>
            </>
        );
    }
}



function Numberlist(props){
    const numbers = props.numbers;
    const listItens = numbers.map((number)=><li>{number}</li>);
    

    return (
        <>
            <h3 style={{color:'red'}}>
                Pay attention, the map argument is not an anonymous function.
            </h3>
            <ul>
                {listItens}
            </ul>
            <p>
                By running the last function we recieve an error, it's because we need to inform an key to every li
            </p>
        </>
    );
}

function NumberlistKey(props){
    const numbers = props.numbers;
    const listItens = numbers.map((number)=><li key={number.toString()}>{number}</li>);
    

    return (
        <>
            <h3 style={{color:'green'}}>
                Without the key error:
            </h3>
            <ul>
                {listItens}
            </ul>
            <p>
                Remember that the keys are uniques to brother elements, therefore they are not global, this means that we can build two list of differents arrays using the same keys.
            </p>
            <hr/>
        </>
    );
}


export default Keys;