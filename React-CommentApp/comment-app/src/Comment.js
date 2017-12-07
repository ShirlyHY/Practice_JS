import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Comment extends Component {
  static propTypes={
    comment:PropTypes.object.isRequired,    //参数验证
    onDeleteComment:PropTypes.func,
    index:PropTypes.number
  }
  constructor(){
    super()
    this.state={
      timeString:''
    }
  }
  componentWillMount(){
    this._updateTimeString()
    //启动定时器，每隔5秒刷新
    this._timer=setInterval(this._updateTimeString.bind(this),5000)
  }
  componentWillUnmount(){
    clearInterval(this._timer)  //评论组建销毁时清除定时器
  }
  _updateTimeString(){      //评论时间更新
    const comment=this.props.comment
    const duration=(+Date.now()-comment.createdTime)/1000
    this.setState({
      timeString:duration>60
      //`是键盘Tab上面的单引号！！！！不是enter左边的'！！！！！！！
      ?`${Math.round(duration/60)}分钟前`  
      :`${Math.round(Math.max(duration,1))}秒前`
    })
  }

  _getProcessedContent(content){
    //对HTMl标签进行转义，防止XSS漏洞
    return content.replace(/&/g,"&amp;")
                  .replace(/</g,"&lt;")
                  .replace(/>/g,"&gt;")
                  .replace(/"/g,"&quot;")
                  .replace(/'/g,"&#039;")
                  .replace(/'([\S\s]+?)'/g,'<code>$1</code>')
  }
  handleDeleteComment(){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(this.props.index)
    }
  }
  render() {
    return (
      <div className="comment">
        <div className='comment-user'>
          <span className='comment-username'>
          {this.props.comment.username}
          </span>:
        </div>
        <p dangerouslySetInnerHTML={{
          __html:this._getProcessedContent(this.props.comment.content)}}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span onClick={this.handleDeleteComment.bind(this)} 
              className='comment-delete'>删除</span>
      </div>
    );
  }
}

export default Comment;
