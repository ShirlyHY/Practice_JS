import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList  from './CommentList';


class CommentApp extends Component {
  constructor(){
    super();
    this.state={
      comments:[]
    }
  }

  componentWillMount(){
    this._loadComments()  //加载评论
  }
  _loadComments(){  //从LocalStorage中加载评论
    let comments=localStorage.getItem('comments')
    if(comments){
      comments=JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments(comments){
    //**********保存时为什么不能直接传递变量comments，而是要JSON转格式 */
    localStorage.setItem('comments',JSON.stringify(comments))  //将评论内容保存到LocalStorage中
    //localStorage.setItem('comments',comments)  
    //*****如果不转格式，在CommentList中map函数无法操作*********
  }
    handleSunbmitComment(comment){
      if(!comment){
        return;
      }
      if(!comment.username){
        return alert('请输入用户名');
      }
      if(!comment.content){
        return alert('请输入评论');
      }
    this.state.comments.push(comment)
    this.setState({
      comments:this.state.comments
    })
    this._saveComments(this.state.comments)  //保存评论
  }
  handleDeleteComment(index){
    const comments=this.state.comments
    comments.splice(index,1) //删除下标为Index的评论
    this.setState({comments})
    this._saveComments(comments)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSunbmitComment.bind(this)}/>
        <CommentList 
        comments={this.state.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    );
  }
}

export default CommentApp;
