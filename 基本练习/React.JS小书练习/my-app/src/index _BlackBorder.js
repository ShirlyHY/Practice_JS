import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BlackBorderContianer extends Component{
       
    render(){
        const content=[];
        let i=0;
        //**************************样式的添加还不熟练！！！！！！！！！！！！！！！
        for (var child in this.props.children){
            content.push(
                <div className='divBorder' key={i++}>{this.props.children[child]}</div>                
            )
         //   console.log({{this.props.children[child]}})  //怎么打不出来？？？？？？？？？？？？？          
        }
        return(
            <div>
                {content}
            </div>
        )
    }
}


ReactDOM.render(<BlackBorderContianer >
    <div>My Name:Lucy</div>
    <p>My Age:<span>12</span></p>
    </BlackBorderContianer >,document.getElementById('root'))



