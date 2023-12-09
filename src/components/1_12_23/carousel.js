import { Component } from "react";
import "./card.css"
class SlideCarousel extends Component {
  state = {
    image: [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1701734400&semt=ais",
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    ],
    count: 0,
  };
  increment = () => {
    this.setState((prevState) => ({
      count:
        (prevState.count - 1 + prevState.image.length) % prevState.image.length,
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % prevState.image.length,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Backward</button>
        <img
          src={this.state.image[this.state.count]}
          style={{ width: "100px", height: "100px" }}
          alt="images"
        ></img>
        <button onClick={this.decrement}>Forward</button>
      </div>
    );
  }
}
export default SlideCarousel;

export class CardComponent extends Component{
  render() {
    return (
      <div className="main">
        <div className="container w-25">
          <img
            src={
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg"
            }
            width={300}
            height={300}
            alt="wallpaper"
          />
          <div className="body">
            <h5>Flowers</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="container w-25">
          <img
            src={
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg"
            }
            width={300}
            height={300}
            alt="wallpaper"
          />
          <div className="body">
            <h5>Flowers</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="container w-25">
          <img
            src={
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg"
            }
            width={300}
            height={300}
            alt="wallpaper"
          />
          <div className="body">
            <h5>Flowers</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="container w-25">
          <img
            src={
              "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg"
            }
            width={300}
            height={300}
            alt="wallpaper"
          />
          <div className="body">
            <h5>Flowers</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
