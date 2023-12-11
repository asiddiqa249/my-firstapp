import { Component } from "react";
import "./list.css";
import { Collapse } from "react-bootstrap";

class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      arr: [
        {
          id: "1",
          name: "Ayesha",
          designation: "React",
        },
        {
          id: "2",
          name: "Deepthi",
          designation: "Angular",
        },
        {
          id: "3",
          name: "Pravalika",
          designation: "JS",
        },
      ],
      filteredList: [],
    };
  }

  handleClick = (designation) => {
    if (designation === "All") {
      this.setState({
        filteredList: [],
      });
    } else {
      const filteredList = this.state.arr.filter(
        (val) => val.designation === designation
      );
      this.setState({
        filteredList,
      });
    }
  };

  render() {
    const data =
      this.state.filteredList.length > 0
        ? this.state.filteredList
        : this.state.arr;

    return (
      <>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.designation}</td>
            </tr>
          ))}
        </table>
        <button onClick={() => this.handleClick("React")}>React</button>
        <button onClick={() => this.handleClick("Angular")}>Angular</button>
        <button onClick={() => this.handleClick("JS")}>JS</button>
        <button onClick={() => this.handleClick("All")}>All</button>
      </>
    );
  }
}

export default ListComponent;
