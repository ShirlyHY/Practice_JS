import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var xhr=new XMLHttpRequest();
xhr.open("get","https://api.github.com",false);
xhr.send(null);
var datas={};//new object()会出错，未定义？？？？？？？
if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
    datas=JSON.parse(xhr.responseText);
    console.log("获取数据："+datas);
}else{
    alert("Request was unseccessful:"+xhr.status);
}

/*class DataList extends Component{

    render(){
        const {datalist}=this.props;
        return(
            <div>
            <li>{datalist.key} : {datalist.value}</li>
            </div>
        )
    }
}*/

class Index extends Component{
    render(){
        const dataList=[];
        var i=0;
        for(var data in datas){
            //i++;
            dataList.push(
                <div>
                    <li key={i++}>{data} : {datas[data]}</li>
                </div>
            )
        }
        return(
            <div><ul>{dataList}</ul></div>
        )
    }
}

ReactDOM.render(<Index />,document.getElementById('root'))



