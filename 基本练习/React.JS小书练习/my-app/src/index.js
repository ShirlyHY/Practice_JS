import React,{Component}from 'react';
import ReactDOM from 'react-dom';


const getDefaultStyledPost=(defaultStyle)=>{
    return(
        class Post extends Component{
            render(){
                /*扩展运算符...*/
                const style={...defaultStyle,...this.props.style}
                return(
                    <p style={style}>段落</p>
                )
            }
        }
    )
}

const Post=getDefaultStyledPost({color:'red'})

/*jsx在render中的return返回的元素是根元素只能有一个*/
ReactDOM.render(<div><Post style={{color:'blue',fontSize:'13px'}}/>
<Post style={{fontSize:'12px'}}/></div>,document.getElementById('root'))



