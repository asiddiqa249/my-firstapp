import ButtonComponent from "./components/button/class/button-component";
import ButtonComponentFun, { LoginComponent } from "./components/button/functional/button-component-fun";
import DateComp, { BtnComponent } from "./components/Date/date";
import CarouselComponent from "./components/carousel/carousel";
import TextComponent from "./components/text/textcomponent";
import UnOrderedList from "./components/list/ul-list";
import OrderedList from "./components/list/ol-list";
import TableComponent from "./components/table/table";
import ImageLocalComponent from "./components/imagefolder/image-server/image-server";
import ImageServerComponent from "./components/imagefolder/image-server/image-server-class";
import { Table } from "react-bootstrap";
import ApiComponent from "./components/Apifolder/profileapi";
import Sliding, { CardComponent } from "./components/1_12_23/carousel";
import SlideCarousel from "./components/1_12_23/carousel";
import BootstrapCard from "./components/4_12_23/bootstrapcard";
import HeaderComp from "./components/4_12_23/header";
import FooterComp from "./components/4_12_23/footer";
import ButtonPropComponent, { ButtonPropComponent1 } from "./components/29_11_23/props";
import TxtComp from "./components/29_11_23/text";
import PureComponent1 from "./components/7_12_23/purecompo";
import ListComponent from "./components/7_12_23/list";
import UseState from "./components/9_12_23/usestate";
import UseState2 from "./components/9_12_23/timer";
import Uncontrolled from "./components/11_12_23/forms";
import Controlled from "./components/11_12_23/controlled";
import Registration from "./components/11_12_23/registration";
import DemoCarousel from "./components/carousel/carousel";
import Todo from "./components/12_12_23/todolist";
import NavigationStack from "./navigationStack/navigationStack";
// import BootstrapComponent, { FormComponent, HeadingComponent, ParagraphComponent, TableComp } from "./components/card/card";
function App() {
  function getDay(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "None"
    }
  }
  function getHour(Time) {
    let greet;
    if (Time > 0 && Time < 12) {
      greet="Good Morning"
    } else if (Time >= 12 && Time < 16) {
      greet="Good afternoon"
    } else if (Time >= 16 && Time < 20) {
      greet = "Good Evening"
    } else {
      greet="Good Night"
    }
    return greet;
  }
  function getMnth(Month) {
    switch (Month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "None"
    }
  }
  function getSeason(Season) {
    if (Season >= 1 && Season < 3) {
      return "winter"
    } else if (Season >= 3 && Season < 7) {
      return "Summer"
    } else if (Season >= 7 && Season < 10) {
      return "Rainy"
    } else {
      return "Monsoon"
    }
  }
  const randColor = () => {
    let rcolor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${rcolor}`
      
    
  }
  

  
  return (
    // <div>
    //   <h1>Hello world</h1>
    //   {/* <BootstrapComponent />
    //   <TableComp />
    //   <FormComponent />
    //   <HeadingComponent />
    //   <ParagraphComponent />
    //   <ButtonComponent /> */}

    //   {/* <div>
    //     <ButtonComponentFun
    //       btnProp={{
    //         text: "100px",
    //         bgcolor: "green",
    //         color: "White",
    //         width: 100,
    //       }}
    //     />
    //     <ButtonComponentFun
    //       btnProp={{
    //         text: "200px",
    //         bgcolor: "red",
    //         color: "white",
    //         width: 200,
    //       }}
    //     />
    //     <ButtonComponentFun
    //       btnProp={{
    //         text: "300px",
    //         bgcolor: "yellow",
    //         color: "red",
    //         width: 300,
    //       }}
    //     />
    //     <ButtonComponentFun
    //       btnProp={{
    //         text: "400px",
    //         bgcolor: "pink",
    //         color: "white",
    //         width: 400,
    //       }}
    //     />
    //     <ButtonComponentFun
    //       btnProp={{
    //         text: "500px",
    //         bgcolor: "black",
    //         color: "white",
    //         width: 500,
    //       }}
    //     />
    //   </div> */}

    //   {/* <LoginComponent/> */}
    //   {/*<UnOrderedList />
    //    <OrderedList />
    //    <TableComponent />
    //    <ImageLocalComponent />
    //    <ImageServerComponent/> */}
    //   {/* <table border="1px solid black" cellPadding="5px" cellSpacing="0px">
    //      <tr>
    //        <th>Sl.no</th>
    //        <th>Name</th>
    //        <th>Group</th>
    //      </tr>
    //      <tr>
    //        <td>1</td>
    //        <td>Ayesha</td>
    //        <td>CSE</td>
    //      </tr>
    //      <tr>
    //        <td>2</td>
    //        <td>AKhil</td>
    //        <td>CSE</td>
    //      </tr>
    //      <tr>
    //        <td>3</td>
    //        <td>Deepthi</td>
    //        <td>MECH</td>
    //      </tr>
    //    </table> */}
    //   {/* <ul>
    //      <li>HTML</li>
    //      <li>CSS</li>
    //      <li>BOOTSTRAP</li>
    //      <li>JS</li>
    //      <li>REACT.JS</li>
    //    </ul> */}
    //   {/* <ol>
    //      <li>HTML</li>
    //      <li>CSS</li>
    //      <li>BOOTSTRAP</li>
    //      <li>JS</li>
    //      <li>REACT.JS</li>
    //    </ol> */}
    // </div>

    // <div>
    //   {/* <TextComponent>
    //     hello
    //     <p>hello Everyone</p>
    //     <p>How are you?</p>
    //   </TextComponent> */}
    //   {/* <ApiComponent />
    //   <CarouselComponent /> */}
    //   <DemoCarousel/>
    // </div>

    // <div>
    //   <SlideCarousel />
    //   <CardComponent />
    //   <BootstrapCard />
    //   <HeaderComp />
    //   <ApiComponent />
    //   <FooterComp />
    //   <DateComp
    //     day={getDay(new Date().getDay())}
    //     greeting={getHour(new Date().getHours())}
    //     Month={getMnth(new Date().getMonth())}
    //     year={new Date().getFullYear()}
    //     season={getSeason(new Date().getMonth())}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "100px",
    //       bgcolor: randColor(),
    //       color: "white",
    //       width: 100,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "200px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 200,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "300px",
    //       bgcolor: randColor(),
    //       color: "white",
    //       width: 300,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "400px",
    //       bgcolor: randColor(),
    //       color: "red",
    //       width: 400,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "500px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 500,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "600px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 600,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "700px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 700,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "800px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 800,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "900px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 900,
    //     }}
    //   />
    //   <BtnComponent
    //     btnProperties={{
    //       text: "1000px",
    //       bgcolor: randColor(),
    //       color: "black",
    //       width: 1000,
    //     }}
    //   />
    // </div>

    <div>
      {/* <ButtonPropComponent text="login" bgcolor="blue" color="white"/>
      <ButtonPropComponent text="signup" bgcolor="pink" color="black" />
      <TxtComp>
        Hello
      </TxtComp>
      <ButtonPropComponent1/>
      <PureComponent1 />
       */}
      {/* <ListComponent />
      <UseState />
      <UseState2 /> */}
      {/* <Uncontrolled/> */}
      {/* <Controlled /> */}
      {/* <Registration /> */}
      {/* <Todo/> */}
      <NavigationStack/>
    </div>
  );
  
}

export default App;
