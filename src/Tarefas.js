import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Listatarefas = styled.section`
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
height: 100vh;
display: flex;
flex-direction: column;
padding: 10vh 40vw;
margin: 0 auto;

input{
    border-radius: 5px;
    height: 30px;
    align-items: center;
    border: none;
    margin: 10px 0  15px 0;

    :hover{
        outline: none;
    }
}
`
const Add = styled.button`
color: white;
background-color: pink;
border-radius: 10px;
height: 30px;
border: none;

:hover{
    background-color: green;
    cursor: pointer;
    outline: none;
}
`
const Listadiv = styled.div`
color: purple;
font-size: 1.5rem;
padding: 10px 0;
display: flex;
flex-direction: column;

div{
    display: flex;
    justify-content: space-between;

    :hover{
        text-decoration: underline;
        color: red;
    }
}

button{
    color: red;
    background-color: pink;
    border-radius: 5px;
    height: 30px;
    border: none;
    margin: 5px 0;

:hover{
    background-color: red;
    color: white;
    cursor: pointer;
    outline: none;
}
`

export default class Tarefas extends React.Component{
    state = {
        tarefa: "",
        listaTarefa: [],
    }

    buscarTarefas = (event) => {
        this.setState({
            tarefa: event.target.value
        })
    }

    addTarefas = () => {
        if(this.state.tarefa.length > 0){
            this.setState({
                listaTarefa: this.state.listaTarefa.concat({
                    tarefa: this.state.tarefa,
                    id: Date.now() //traz numeração específica
                }),
                tarefa: ""
            })
        }
    }

    removerTarefa = (id) => {
        this.setState({
            listaTarefa: this.state.listaTarefa.filter((item) => {
                return item.id !== id
            })
        })
    }

    render(){
        return (
            <Listatarefas>
                <GlobalStyle />
                <h1>Lista de Tarefas</h1>
                <input onChange={this.buscarTarefas} value={this.state.tarefa}/>
                <Add onClick={this.addTarefas}>Adicionar</Add>
                <Listadiv>
                    {this.state.listaTarefa.map((item) => (
                        <div key={item.id}>
                            <p>{item.tarefa}</p>
                            <button onClick={()=> {this.removerTarefa(item.id)}}>Excluir tarefa</button>
                        </div>
                    ))}
                </Listadiv>
            </Listatarefas>
        )
    }
}