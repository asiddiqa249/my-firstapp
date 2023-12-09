import "./cardstyle.css";
const BootstrapComponent = () => {
  return (
    <div className="cardstyle">
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          // className="card-img-top"
          alt="..."
          style={{ padding: "10px" }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a> Go somewhere </a>
        </div>
      </div>
    </div>
  );
};
export default BootstrapComponent;

export const TableComp = () => {
  return (
    <table style={{ border: "1px solid black" }}>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>HTML</td>
        <td style={{ border: "1px solid black" }}>CSS</td>
        <td style={{ border: "1px solid black" }}>Bootsrap</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>XML</td>
        <td style={{ border: "1px solid black" }}>JavaScript</td>
        <td style={{ border: "1px solid black" }}>React</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>HTML</td>
        <td style={{ border: "1px solid black" }}>CSS</td>
        <td style={{ border: "1px solid black" }}>Bootsrap</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black" }}>XML</td>
        <td style={{ border: "1px solid black" }}>JavaScript</td>
        <td style={{ border: "1px solid black" }}>React</td>
      </tr>
    </table>
  );
};

export const FormComponent = () => {
  return (
    <div>
      <h2>Forms</h2>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
    </div>
  );
};

export const HeadingComponent = () => {
  return (
    <div>
      <h2>Heading</h2>
    </div>
  )
}
export const ParagraphComponent = () => {
  return (
    <div>
      <p>paragraph</p>
    </div>
  )
}
