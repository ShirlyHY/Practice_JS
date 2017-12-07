import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends Component{
    handleChange(event){
        if(this.props.onSetData){
            this.props.onSetData(event.target.value);
        }
    }
    render(){
        return(
            <div>
                <input type='number' onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

class PercentageShower extends Component{
    /*static defaultProps={
        data:0
    }*/
    render(){
        return(
            <div> {this.props.data.toFixed(2)}%</div>
        )
    }
}

class PercentageApp extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    oninput(event){
        this.setState({
            data:event
        })
    }
    render(){
        return(
            <div>
                <Input   onSetData={this.oninput.bind(this)}/>
                <PercentageShower  data={this.state.data*100}/>
            </div>
        )
    }
}



ReactDOM.render(<PercentageApp />,document.getElementById('root'))



