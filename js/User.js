import React from 'react';

class User extends React.Component{
  render(){
    return (
        <tr>
        <td className="text-center"><p>{this.props.id}</p></td>
        <td className="user-image-cell">
          <span className="user-image-name-container">
            <img className="logo-img" src={this.props.data.img}/>
            <a className="username" href={`https:\/\/www.freecodecamp.com\/${this.props.data.username}`}>
              <p>{this.props.data.username}</p>
            </a>
          </span>
        </td>
        <td className="text-center"><p>{this.props.data.recent}</p></td>
        <td className="text-center"><p>{this.props.data.alltime}</p></td>
        </tr>
    );
  }
}

export default User;
