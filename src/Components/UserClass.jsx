import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {}
  render() {
    const { name, location } = this.props;
    // const { count, count1 } = this.state;
  
    return (
      <div className="border-2 border-solid border-black p-4 mt-4">
        {/* <span> Count : {count}</span>
        <span> Count1 : {count1}</span>
        <button
          className="bg-red-400 p-2 rounded-lg mx-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increse Count
        </button> */}
        <h1 className="font-medium">Name : {name}</h1>
        <h1 className="font-medium">Location : {location}</h1>
      </div>
    );
  }
}

export default UserClass;
