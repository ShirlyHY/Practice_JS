import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Post  extends Component{
    constructor(){
        super()
        this.state={
            isLoaded:'数据加载中...'
        }
    }
    componentWillMount(){
     getPostData().then((postContent)=>{
        this.setState({
            isLoaded:postContent
        })
     })
    }
    reLoad(){
        this.setState({
            isLoaded:'数据加载中...'
        })
        getPostData().then((postContent)=>{
            this.setState({
                isLoaded:postContent
            })
         })
    }
    render(){
        const {isLoaded}=this.state
        return(
            <div>
                <div className='post-content'>{isLoaded}</div>
               <button onClick={this.reLoad.bind(this)}>重新加载</button>
            </div>
        )
    }
}





ReactDOM.render(<Post />,document.getElementById('root'))



