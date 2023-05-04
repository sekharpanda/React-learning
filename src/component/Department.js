import React from 'react';

let emp = {
    provience: "Kerala",
    country: 'India',
    pin: "874938274"
} 
class Department extends React.Component{
    constructor(props) {
        super();
        console.log("this is props data=", props)
    }
    render() {
        return (
            <div id='department'>
                {/* <h4>I'm from {this.props.province}</h4>
                <h4>I'm from {this.props.country}</h4>
                <h4>I'm from {this.props.pin}</h4> */}
                <h4>I'm from {emp.country}</h4>
                <h4>I'm from {emp.provience}</h4>
                <h4>I'm from {emp.pin}</h4>
            </div>
        )
    }
}

export default Department;