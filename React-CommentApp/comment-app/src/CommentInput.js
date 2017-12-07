import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes={
    onSubmit:PropTypes.func  //onSubmit参数验证，只能为函数
  }
  constructor(){
    super();
    this.state={
      username:'',
      content:''
    }
  }
  ComponentDidMount(){
    this.textarea.focus()  //自动聚焦到评论框
  }
  ComponentWillMount(){
    this._loadUsername()   //组件挂载前的数据加载
  }
  _loadUsername(){
    const username=localStorage.getItem('username')
    if(username){
      this.setState({username})
    }
  }
  _saveUsername(username){
    localStorage.setItem('username',username) //将用户名保存到LocalStorage中
  }
  handleUsernameBlur(event){
    this._saveUsername(event.target.value)
  }
  handleUsernameChange(event){
    this.setState({
      username:event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      content:event.target.value
    })
  }
  handleSubmit(){
    if(this.props.onSubmit){
     /* const{username,content}=this.state
      this.props.onSubmit({username,content})*/
      this.props.onSubmit({
      username:this.state.username,
      content:this.state.content,
      createdTime:+new Date()    //添加时间
    })

    }
    this.setState({content:''})
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
        <span className='comment-field-name'>用户名:</span>
        <div className='comment-field-input'>
          <input 
          onBlur={this.handleUsernameBlur.bind(this)}  //保存用户名
          value={this.state.username} 
          onChange={this.handleUsernameChange.bind(this)}/>
        </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
            ref={(textarea)=>this.textarea=textarea}   //获取textarea节点进行聚焦操作
            value={this.state.content} 
            onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
