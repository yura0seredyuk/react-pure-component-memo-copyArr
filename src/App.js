import React from 'react';
import {FriendsList} from './Components/FriendsList';
import {User} from './Components/User';
import "./style.css";

const yura = {
  name: 'Yura',
  age: 23,
  people: ['Yura', 'Lesya', 'Oleg'],
}

class App extends React.Component {
  state={
    age: 0,
    friends: ['Yura', 'Lesya', 'Oleg'],
    user: yura,
  }

  addYear = () => {
    this.setState(state => ({
      age: state.age + 1,
    }));
  }

  addFriend = () => {
    this.setState(state => ({
      friends: [
        ...state.friends,
        Math.random(),
      ],
    }));
  };

  addYearForUser = () => {
    this.setState(state => ({
      user: {
        ...state.user,
        age: state.user.age + 1,
      }
    }));
  }

  addFriendForUser = () => {
    this.setState(state => ({
      user: {
        ...state.user,
        people: [
          ...state.user.people,
          Math.random(),
        ]
      }
    }));
  }

  render() {
    const {age, friends, user} = this.state;

    return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Age = {age}</h2>
      <button
        type="button"
        onClick={this.addYear}
      >
        Age++
      </button>

      <br />
      Normal arr
      <FriendsList friends={friends} />
      Reverce arr
      <FriendsList friends={[...friends].reverse()} />
      Sorted arr
      <FriendsList friends={[...friends].sort()} />

      <button
        type="button"
        onClick={this.addFriend}
      >
        Add friend
      </button>

      <User {...user} />

      <button
        type="button"
        onClick={this.addYearForUser}
      >
        Add year for user
      </button>

      <button
        type="button"
        onClick={this.addFriendForUser}
      >
        Add friend
      </button>

      <User {...yura}/>
    </div>
    )
  }
}

export default App;