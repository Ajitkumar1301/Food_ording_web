import { Component } from "react";
import UserClass from "./UserClass";

class Aboutus extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="m-8">
        <h1 className="text-3xl font-bold">About</h1>
        <UserClass name={"AJITH"} location={"South st, Chennai, Tamilnadu"} />
      </div>
    );
  }
}

export default Aboutus;
