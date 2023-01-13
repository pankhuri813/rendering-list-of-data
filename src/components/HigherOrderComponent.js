






import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
    
            ]
        }
    }

    template (head,data) {
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <React.Fragment>
            <h1>{head}</h1>
            <div className="display-box">
            <ul color='blue'>{data} </ul>
            </div>
          </React.Fragment>
        )
    }


    // display all items
renderItems = (data) => {
    
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
             
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span color='blue'>Id: {item.id}</span>
                <span color='blue'>Name : {item.name}</span>
                <span color='blue'>User Type: {item.user_type}</span>
                <br></br>
          
        </React.Fragment>
    ));
    return mapRows;
};


renderuser_type(){
    let check=this.state.userData.filter((elt)=>
        elt.user_type==="Designer");
        return this.renderItems(check)
    
}

renderName(){
    let jname=this.state.userData.filter((elt)=>
    elt.name[0]==='J');
    return this.renderItems(jname);
}

filterbyAge(){
    let age=this.state.userData.filter((elt)=>
    elt.age >28 && elt.age<=50);
    return this.renderItems(age);
}

Experience(){
    return      this.state.userData.filter((elt)=>
    elt.user_type==="Designer").reduce((sum,elt)=>{
       return sum +=elt.years;
    },0)
   
}


  render() {
    return (
      <div>
        {this.template("Display all items",this.renderItems(this.state.userData))}
        {this.template("Display based on user type",this.renderuser_type())}
        {this.template("Filter all data starting with J",this.renderName())}
        {this.template("Filter all data based on age greater than 28 and age less than or equal to 50",this.filterbyAge())}
        {this.template("Find the total years of the designers",this.Experience())}
      </div>
    )
  }
}


  