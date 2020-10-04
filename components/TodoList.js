import React, { Component } from 'react'
// import TodoList from './components/TodoList';

  
export class TodoList extends Component {
    constructor(){
        super();
        this.state ={
            inpValue:'',
            todos:[
                {title:'1',done:false},
                {title:'2',done:true},
                {title:'3',done:true},
                {title:'4',done:false},
        ]
        }
    }
    handleChange=(e)=>{
        this.setState({inpValue:e.target.value})
    }
    componentDidMount(){
        this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos:JSON.parse(todos),
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
        return true;
    }
    addTodo = ()=>{
        if(this.state.inpValue==''){
            return;
        }
        this.setState({
            todos:[
                {
                    title:this.state.inpValue,
                    done:false,
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''})
    }
    delTodo = (idx)=>{
        this.setState({
            todos:this.state.todos.filter((item,index)=>index!=idx)
        },()=>{
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
        });
    }
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos:newTodos
        })
    }
    renderTodos = (done)=>{
        return this.state.todos.map((todo,idx)=>{
            if(done==todo.done){
            return <li>
                <input 
                onClick={()=>this.toggle(idx)}
                checked={done} 
                type="checkbox"/>
                <span>{todo.title}</span>
                <button 
                onClick={()=>this.delTodo(idx)}>删除</button>
            </li>
            }
        }
        )
     } 
    render() {
        const{todos,inpValue}=this.state;
        let arr1 = todos.filter(item=>!item.done)
        
        return (
            <div>
                <label htmlFor="inp">todolist</label>
                <input 
                    id='inp'
                    ref={inp=>this.input = inp}
                    value={this.state.inpValue} 
                    type="text"
                    onChange={this.handleChange}
                    />
                <span dangerouslySetInnerHTML={{__html:todos.title}}></span>
                <button onClick={this.addTodo}>添加</button>
                <h2>正在进行</h2>
                <ul>
                    {this.renderTodos(false)}
                </ul>
                <h2>已经完成</h2>
                <ul style={{color:3>21?'red':'green'}}>
                    {this.renderTodos(true)}
                </ul>
                
            </div>
        )
    }
}
export default TodoList
