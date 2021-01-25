# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

# Bug
I have one weirdo problem about something in my localhost on my current Ubuntu distribution, it happens every time we shut down the PC and try to run the npm start again.
I solved this by typing on the terminal:
```console
    unset HOST
```
powww, the problem is solved. But actually I have no idea about what really happens, lol. Btw I will left the log file that was generated every time the error happened.

So let's continue...

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Projeto

### Alterar a porta

Caso a porta 3000 esteja ocupada, devemos alterar a porta para poder executar o projet, poderemos verificar diretamente no arquivo **package.json** e encontrar o registro
```json
    {
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        }
    }
```
no windows, devemos alterar o valor de **start** para
```json
    {
        "scripts": {
            "start": "set PORT=5000 && react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        }
    }
```
já no Ubuntu ou Mac
```json
    {
        "scripts": {
            "start": "PORT=5000 react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        }
    }
```

### Síntaxe JSX

É uma sintaxe de HTML + JS, podemos até mesmo atribuí-las em variáveis
```javascript
    const element = <h1>Hello World!!</h1>;
    ReactDOM.render(element,document.getElementById("root"));
```
isso imprimirá todo conteúdo no elemento com id root.

Podemos usar o JSX da seguinte maneira também
```javascript
    const name = "Marcos"
    const element = <h1>Meu nome é {name}!</h1>;
```
assim como qualquer expressão válida em JS.

### Funções em ReactJS

De forma sucinta podemos também usar funções dentro do JSX:
```javascript
    const user = {
        firstName: "Marcos",
        lastName: "Pereira"
    };

    function formatarNome(user) {
        return user.firstName +" "+ user.lastName;
    }

    const element = (<h1>hello, {formatarNome(user)}!</h1>);

    ReactDOM.render(
    element
    , document.getElementById('root'));
```

### Componente de função ou classe em React

ao definirmos uma função com a primeira letra maíscula, podemos printá-la na tela usando:
```javascript
    function Welcome(){
        return <h1>Hello John  Wayne</h1>
    }

    const element = <Welcome/>;
```
caso esse meu elemento receba uma propriedade, usamos a variável props
```javascript
    function Welcome(props){
        return <h1>Welcome {props.name}</h1>
    }

    const element = <Welcome/>
```
mas também podemos utilizar classe ES6 para definir um componente:
```javascript
    class Welcome extends React.component {
        render(){
            return <h1>Hello, {this.props.name}</h1>
        }
    }
```

### Componentes Compostos

Podemos definir componentes compostos, ou seja, componentes compostos por outros componentes
```javascript
    class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
    }

    const element1 = <Welcome name="Pereirão" />

    function App() {
    return (
        <div>
            <Welcome name="Marvin"/>
            <Welcome name="Lady"/>
            <Welcome name="Pepita"/>
            <Welcome name="Luci"/>
        </div>
    );
    }

    ReactDOM.render(
    <App />
    , document.getElementById('root'));
```
uma dica preciosa é deixar os componentes em arquivos separados e utilizá-los usando a tag em caixa alta.

### Estado e ciclo de vida do React

Ao declararmos a classe 
```javascript
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = { date: new Date() }
        }

        render() {
            return (
                <>
                    <h1>Hora atual</h1>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                </>);
        }
    }
```
o super(props) é utilizado para que possamos trabalhar com states.

Verificamos que os segundos ficam estáticos, nesse caso deveremos adicionar **Métodos de Ciclo de vida** ao projeto que são os
```javascript
    componentDidMount(){

    }
    componentWillUnmount(){

    }
```
o DidMount é executado toda vez que a saída do componente é renderizado no DOM
```javascript
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }
```
a função tick() pode ser criada a partir da função setState() que altera o estado armazenado:
```javascript
    tick(){
        this.setState({
            date: new Date()
        });
    }
```
Em aplicações com muitos componentes, é muito importante limpar os recursos utilizados pelos componentes quando eles são destruídos, para isso usamos o componentWillUnmount() que destrói o componente que ocupa recurso após este deixar de ser visualizado pelo navegador, chamamos isso de unmounting

### Manipulando Eventos

Manipular eventos no React se assemelha muito com manipular eventos em elementos do DOM.

Importante lembrar que eventos em react são nomeados em **camelCase**. Um evento em ReactJS pode ser escrito como no DOM
```javascript
    function Event(){
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
    }
```
ou usando o padrão ES6 de classes, vamos fazer um botão ligar e desligado, para isso podemos utilizar os states.
```javascript

```

## Bootstrap & Reactstrap

First we need to install the bootstrap after that the reactstrap
```console
    npm i -S bootstrap
    npm i -S reactstrap reactstrap react react-dom
```

## Routes
Need to install the module react-router-dom
```console
    npm i -S react-router-dom
```