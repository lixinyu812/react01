import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Control from './components/Control';
import { Demo01 } from './pages/Demo01';
import TodoList from './components/TodoList';


ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <Demo01 name='13' />,
//     document.getElementById('root')
//   );
// 组件声明
// 函数组件
// UI（展示）组件，木偶组件
// function App(props){
//   const { title, id } = props;
//   return <div>
//     <h1>App组件内容</h1>
//     <div>{title}</div>
//     <div>{id}</div>
//   </div>
// }
// // 智能组件
// class Demo extends React.Component{
//   constructor(){
//      super();
//     //  声明状态
//      this.state = {
//        name: new Date().toLocaleString()
//      }
//      setInterval(()=>{
//       this.setState({name:new Date().toLocaleString()})
//      },1000)
//   }
//   render(){
//     return <div>
//       <div>name:{this.state.name}</div>
//       <App title={this.state.name} id='app'/>
//     </div>
//   }
// }





// let ele = React.createElement(
//   'h1',
//   {id:'title'},
//   React.createElement('div',{},'hello'),
//   'react'
// )

// 将jsx对象渲染到DOM中
// let ReactDOM = {
//   render(eleObj,container){
//     // 解构
//     const { type,props } = eleObj;
//     // 创建第一层节点
//     let ele = document.createElement(type);
//     // 遍历属性对象，将属性添加到第一层节点对象上
//     for (const prop in props) {
//       console.log(prop)
//       if(prop == 'children'){
//         if(typeof props.children == 'string'){
//             const txtNode = document.createTextNode(props.children);
//             ele.appendChild(txtNode);
//             break;
//         }
//         // 将第一层节点对象的子元素添加进去
//         props.children.forEach( child => {
//           if(typeof child == 'string'){
//             const txtNode = document.createTextNode(child);
//             ele.appendChild(txtNode);
//           }else{
//             ReactDOM.render(child,ele);
//           }
//         })
//       }else{
//         ele[prop] = props[prop];
//       }
//     }

//     // 将第一层DOM节点添加到container中
//     container.appendChild(ele);
//   }
// }
