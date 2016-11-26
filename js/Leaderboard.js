import React from 'react';
import UsersData from './UsersData';
import User from './User';

class Leaderboard extends React.Component{
  constructor(){
    super();
    this.data = {};
    this.state = {
      orderByRecent: true,
      users: {}
    }
    UsersData.getTopAllTimeUsers( response => this.data.allTimeUsers = response );
    UsersData.getTopRecentUsers( response => {
      this.data.recentUsers = response;
      this.orderByRecentUsers();
    } );
  }
  orderByRecentUsers(){
    this.setState( {
      orderByRecent: true,
      users: this.data.recentUsers
     });
  }
  orderByAllTimeUsers(){
    this.setState( {
      orderByRecent: false,
      users: this.data.allTimeUsers
     });
  }
  getUsersTable(){
    return (
       <div className='board table-responsive'>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Camper Name</th>
              <th className="text-center" onClick={()=>this.orderByRecentUsers()}>Points in past 30 days { this.state.orderByRecent ? (<span className="glyphicon glyphicon-arrow-down"></span>) : ''}</th>
              <th className="text-center" onClick={()=>this.orderByAllTimeUsers()}>All time points { !this.state.orderByRecent ? (<span className="glyphicon glyphicon-arrow-down"></span>) : ''}</th>
            </tr>
          </thead>
          <tbody>
          { this.state.users.map( (userData, key) => {return ( < User data={ userData } key={key} id={key+1}/> );}) }
          </tbody>
        </table>
      </div>);
  }
  getLoadingAnimation(){
    return (<div className="loading-animation"><div className="cp-spinner cp-round"></div></div>);
  }
  render(){
    return ( Array.isArray(this.state.users) ) ? this.getUsersTable() : this.getLoadingAnimation();
  }
}
export default Leaderboard;
