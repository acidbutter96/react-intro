import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        //to use setState is necessary to use bind

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
        };
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        alert(this.state.email+" "+this.state.name);
        if(this.state.email.length<10){
            document.getElementById("mailing").style.color = "red";
        }else{
            this.setState({
                name: "",
                email: ""
            });
            
            document.getElementById("mailing").value = "";
        }
    }

    render(){
        return (
            <>
                <hr/>
                <section>
                    <h1>Form</h1>
                    <h2>Sup {this.state.name} are your e-mail {this.state.email} ?</h2>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label name="name">Name:</label>
                            <br/>
                            <input type="text" name="name" id="" onChange={this.handleChange}/>
                            <br/>
                            <label name="email" id="mailing">
                                E-mail:
                            </label>
                            <br/>
                            <input type="text" name="email" onChange={this.handleChangeEmail}/>
                            <br/>
                            <br/>
                            <button type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </section>
                <hr/>
            </>
        );
    }
}

export default Form;