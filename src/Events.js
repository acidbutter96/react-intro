import React from "react";

/* function Event(){
    function handleClick(e){
        alert("Link clicado");
        e.preventDefault();
    }
    return (
        <>
            <a href="#" onClick={handleClick}>
                Clique Aqui
            </a>
        </>
    )
} */

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }

        //adicionar o bind para this funcionar dentro da nossa callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state =>({isToggleOn:!this.state.isToggleOn}));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}

export default Event;