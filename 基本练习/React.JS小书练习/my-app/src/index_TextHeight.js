import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Post extends Component{
    constructor(){
        super()
        this.state={
            pheight:0
        }
    }

    componentDidMount(){
        const height=this.p.clientHeight;
        this.setState({pheight:height})
    }
    render(){
        
        return(
            <div>
                <p ref={(p)=>this.p=p} onClick={()=>{console.log(this.state.pheight)}}>{this.props.Content}</p>
            </div>
        )
    }
}
const content='baicbuiabcxnz ln;osbcwiavc nxsdkhbvjnvjvomznxcnkasjnkjzbxbycyrctezrvjvyxdnkjzbxb'




ReactDOM.render(<Post Content={content}/>,document.getElementById('root'))



