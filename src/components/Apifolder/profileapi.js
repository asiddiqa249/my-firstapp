import axios from "axios";
import "./api.css"
const { Component } = require("react");

class ApiComponent extends Component {
  state = {
    products: [],
  };
  handleClick = () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            products: res.data,
          });
        } else {
          alert("Something went wrong");
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Display</button>
        <div className="container">
          <div className="child">
            {this.state.products.map((val) => {
              return (
                <div class="card" key={val.id}>
                  <img src={val.image} alt="Card image cap"/>
                  <div class="card-body">
                    <h6 class="card-title" style={{overflow:"scroll",overflowX:"hidden",overflowY:"hidden",height:"70px"}}>{val.title} </h6>
                    <p class="card-text">${ val.price}</p>
                    <a href="#" class="btn btn-primary">
                      seemore
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ApiComponent;
