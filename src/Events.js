import React from "react";

class Events extends React.Component{
    
    constructor(props){
        //heritage of React.Component to use state and others unknowed properties

        super(props);
        this.state = {
            clicked: true
        }

        //that way we can use all the class methods inside the function
        this.eventFunction = this.eventFunction.bind(this);
    }

    eventFunction(e){
        e.preventDefault();
        this.setState(state=>({
            clicked : !state.clicked
        }));
        
    }
    render(){
        return (<>
            <div style={{color: "orange"}}>
                <div style={{color:this.state.clicked ? "green" : "red"}}>
                    <h1 style={{fontSize:200}}>{this.state.clicked ? "ON" : "OFF"}</h1>
                </div>
                <button style={{backgroundColor:'cyan'}}href="#" onClick={this.eventFunction}>
                    Click here!
                </button>
            </div>
        </>);
        }
    }

    

export default Events;