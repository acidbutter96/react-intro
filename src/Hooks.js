import React, {useState} from "react";

//reuseHooks
import useForm from "./FormHooks";


function UserStateTest(){
    const [count, setCount] = useState(0);
    //count is the state, setCount a special method of React used to change the useState, we can give any name to these variables.

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={()=>setCount(count+1)}>
                    Click me
                </button>
            </div>
        </>
    );
}

function FormHook(props){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleChangeEmail = (e)=>setEmail(e.target.value);

    return (
        <>
            <hr/>
            <section>
                <h1>Form</h1>
                <h2>Sup {name} are your e-mail {email} ?</h2>
                <div>
                    <form >
                        <label name="name">Name:</label>
                        <br/>
                        <input type="text" name="name" id="" onChange={e=>setName(e.target.value)}/>
                        <br/>
                        <label name="email" id="mailing">
                            E-mail:
                        </label>
                        <br/>
                        <input type="text" name="email" onChange={e=>setEmail(e.target.value)}/>
                    </form>
                </div>
            </section>
            <hr/>
        </>
    );

}

function ReuseHooks(props){
    //now we're gonna import the hooks from another file, FormHooks for example

    const [{values}, handleChange,handleSubmit] = useForm();

    const callback = () => {
        alert(`${values.name}`);
    };

    return (
        <>
            <hr/>
            <section>
                <h1>Form</h1>
                <h2>Sup {values.name} are your e-mail {values.email} ?</h2>
                <div>
                    <form onSubmit={handleSubmit(callback)}>
                        <label name="name">Name:</label>
                        <br/>
                        <input type="text" name="name" id="" onChange={handleChange}/>
                        <br/>
                        <label name="email" id="mailing">
                            E-mail:
                        </label>
                        <br/>
                        <input type="text" name="email" onChange={handleChange}/>
                        <br/>
                        <br/>
                        <button type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </section>
            <hr/>
        </>);
}

function Hooks(props){
    return (
        <>
            <div>Hooks</div>
            <p>
                <UserStateTest/>
            </p>
            <h2>
                The last form using Hooks
            </h2>
            <FormHook/>
            <h2>Reuse Hooks</h2>
            <ReuseHooks/>
        </>
    );
}

export default Hooks;