import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';


class Header extends Component{
render(){
    return(
        <div>
            <h1 >React 小书</h1>
        </div>
)
}

}

class Notification extends Component{
    render(){
       // var N=getNotificationCount();
       var N=3;
        return(
            <div>
            <span>{N>0?"有("+N+")条未读消息":"没有未读消息"}</span>
            </div>
        )
    }
}

const title=<h1 className="title">Scrip0J</h1>
const page=<div className="content">{title}</div>
class  Content extends Component{
    render(){

        return(
            <div>
                {page}
            </div>
        )
    }

}
ReactDOM.render(<Content />, document.getElementById('root'));

function renderContent(x){
    ReactDOM.render(<h1>{x}</h1>,document.getElementById('root'))
    }
 //renderContent("Hello World");   


 //ReactDOM.render(<Notification />, documen    t.getElementById('root'));

//ReactDOM.render(<Header />, document.getElementById('root'));

//registerServiceWorker();
