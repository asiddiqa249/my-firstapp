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
        {
          id: "4",
          name: "Akhil",
          designation: "React",
        },
        {
          id: "5",
          name: "Karthik",
          designation: "Angular",
        },
        {
          id: "6",
          name: "Lavan",
          designation: "JS",
        },
        {
          id: "7",
          name: "Pranathi",
          designation: "React",
        },
        {
          id: "8",
          name: "Suraj",
          designation: "Angular",
        },
        {
          id: "9",
          name: "Pallavi",
          designation: "JS",
        },
        {
          id: "10",
          name: "Bhavani",
          designation: "React",
        },
        {
          id: "11",
          name: "Srilekha",
          designation: "Angular",
        },
        {
          id: "12",
          name: "Sai Shiva",
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
        <table className="table table-bordered border-black w-50">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.designation}</td>
              </tr>
            ))} 
          </tbody>
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
