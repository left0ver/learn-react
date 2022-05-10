//  function TodoList() {
//    const msg:string='hhh'
//    const state = {
//      num :1
//    }
//    const add=() =>{
    
//   }
//   return (
//   <div>
//     <input type="text" placeholder="请输入" />
//     <button className='add'onClick={add}>add</button>
//     {num}
//   </div>
//   )
// }
// export default TodoList
import React, { ChangeEvent, Component,MouseEvent,ReactNode } from 'react'
  interface TodoListItemProps {
    show: boolean
    count:number
    onCountChange:(count:number) =>void
    children:ReactNode,
    left:ReactNode
    right:ReactNode
  }
  function TodoListItem (props:TodoListItemProps) {
    const add3=(event:MouseEvent<HTMLButtonElement>):void =>{
      props.onCountChange(props.count);
    }
    if (!props.show) {
      return null
    }
    return (
      <div>
        <li>count:{props.count}</li>
        <button onClick={add3}>+1</button>
        <div>{props.left}</div>
        <div>{props.children}</div>
        <div>{props.right}</div>
      </div>
    )
  }

interface TodoListState {
  msg: string
  show:boolean
  num:number
  selectValue:string
  count:number
}

export default class TodoList extends Component {
 
      flag: boolean=true
      numArr:number[]=[1,3,3,5,6]
      myRef= React.createRef <HTMLInputElement>()
      state :TodoListState= {
      msg:'faf',
      show:true,
      num:1,
      selectValue:'pear',
      count:5
    }
  add = (): boolean =>{
    this.setState({
      msg: '4545',
      show:!this.state.show
    })
    console.log(this.flag);
    console.log(this.myRef.current?.value);
    console.log(this.refs['btnRef']);
    return this.flag
  }
  add1= ():void=>{
    this.setState((state:TodoListState)=>{
      return {
        num:state.num+1
      }
    })
  }
  add2= ():void=>{
    this.add1()
    this.add1()
    this.add1()
    this.add1()
  }
 
  handleChange=(event:ChangeEvent<HTMLSelectElement>):void =>{
      this.setState({selectValue:event.target.value})
  }
  handleCountChange=(count:number):void =>{
    this.setState({count:count+1})
  }
  render() {
    return (
        <div>
          <input type="text" placeholder="请输入" ref={this.myRef}/>
          <button className='add'onClick={this.add} ref="btnRef">add</button>
          <button className='add'onClick={this.add1} >add1</button>
          <button className='add'onClick={this.add2} >add2</button>
          <div>{this.state.num}</div>
          <TodoListItem show={this.state.show} count={this.state.count} onCountChange={this.handleCountChange}
          left={
            <div>
              left
            </div>
          }
          right={
            <h3>right</h3>
          }
          >
            <div>
              <h1>children</h1>
            </div>
          </TodoListItem>
          {this.state.show
          ?<div>
            <h2>true</h2>
          </div>
          :<h1>false</h1>}

          {this.numArr.map((item,index) =>{
           return <li key={index}>{item}</li>
          })}
        <select value={this.state.selectValue} onChange={this.handleChange}>
          <option value="apple">苹果</option>
          <option value="pear">梨</option>
          <option value="banana">香蕉</option>
        </select>
        <input type="text" value='gi' />
        </div>
    
    )
  }
}
