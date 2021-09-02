import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = { name: 'Lee', age: 30 };
  }

  changeName = () => {
    this.setState({ name: 'Park' });
  };

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.changeName}>버튼</button>
      </div>
    );
  }
}

export default Profile;
