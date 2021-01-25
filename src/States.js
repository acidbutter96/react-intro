import React from "react";

class Clock extends React.Component{

    constructor(props){

        //super() is the constructor of the father class, it referes about the heritage of the class Clock in relation to the object ReactComponent
        //we cannot call the constructor before we call the father constructor, this is why we have to call the super method.
        //so then we can work with states, an method of ReactComponent class.
        super(props);
        this.state = {
            date: new Date()
        }

    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );

        //this do the same as the setState of flutter :)
        //the big deal about learning two frontend languages and one backend language makes me feel like a really fullstack developer lol, can't wait to add the tensorflow instancies in my projects lmao
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
        //with this we can stop//destroy the states declared in the DidMount, sounds like: setState -> unsetState === DidMount -> WillUnmount :)
    }

    //the function above is good to set timers, etc

    tick(){
            this.setState({
                date: new Date()
            });
    }

    render(){
        return(
            <>
                <div style={{color:'violet'}}>
                    <hr/>
                    <h1>Look that, that's amizing wow, we can use OO to create classes and then renderize html objects, awesome!</h1>
                    <h2>Therefore we have a lot of funcionalities to explore**</h2>
                    <hr/>
                </div>
                <div>
                    <h2>
                        Here we can print any state defined beacause of the super() <strong>method</strong>:
                    </h2>
                    Using the date state we can see
                    <ul>
                        <li>
                             the date:
                            <ul>
                                <li>{this.state.date.toDateString()}</li>
                            </ul>
                        </li>
                        <li>
                            the time:
                            <ul>
                                <li>
                                    {this.state.date.toLocaleTimeString()}
                                </li>
                            </ul>
                        </li>
                        <li>
                            etc
                        </li>
                    </ul>
                </div>
                <div>
                    The componentDidMount() runs every time the component is rendered on DOM. We can configure, for example, a timer used to make the state auto update from time to time.
                </div>

            </>
        );
    }
}

export default Clock;