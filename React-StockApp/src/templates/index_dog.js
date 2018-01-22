import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dog extends Component{
    constructor(){
        super()
        this.state={
            isRunning:false,
            isBarking:false
        }
    }
bark(){
    console.log('bark')
}
run(){
    console.log('run')
}
    handleClickOnDog(){
        this.bark()
        this.setState(
            {
                isBarking:!this.state.isBarking
            },
        this.run(),
        this.setState(
            {
                isRunning:!this.state.isRunning
            }
       
        )
    }

    render(){
        return(
            <button onClick={this.handleClickOnDog.bind(this)}>狗狗{this.state.isBarking?'在叫':'没叫'}，{this.state.isRunninging?'在跑':'没跑'}~</button>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <Dog />
            </div>
        )
    }
}

ReactDOM.render(<Index />,document.getElementById('root'))



//ReactDOM.render(<Header />, document.getElementById('root'));

//registerServiceWorker();
