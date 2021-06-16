import React,{Component} from "react";
class classcounter extends Component{
    constructor(props){
        super(props);
    
    this.state={
        count:0
    }
}
    increamentcounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.increamentcounter}>click{this.state.count}</button>
                </div>
        )
    }
}; 
export default classcounter;