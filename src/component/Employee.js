import React from "react";
import Department from "./Department";

class Employee extends React.Component {
    render() {
        return (
            <div id='employee'>
                <h1 id="test" className="demo">I'm an employee</h1>
                <Department province="Odisha" country="India" pin="456656"/>
            </div>
        )

    }
}

export default Employee;

