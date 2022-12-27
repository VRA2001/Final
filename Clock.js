import React from "react";

let time =0;


class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount(){

        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });

    }
    
    render(){
        const {date} =this.state;
        const min =date.getMinutes();
        const second = date.getSeconds();

        let className = '';

        if ((second % 10 ==0)) {
        className = 'animate_fadeInLeft';
        } else if(second % 5 == 0) {
            className = 'animate_fadeOutRight';
        }
        
        return  <div>    
            {min} : {second}

            <div className={"animate__animated " + className}> <h4>Hello World</h4></div>
      </div>;

        }
    }
export default Clock;