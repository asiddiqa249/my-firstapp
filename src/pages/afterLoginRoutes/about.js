import Navbar from "../../components/15_12_23/navbar";
import UseEffect1 from "../../components/18_12_23(UseEffect)/useEffect1";
import UseEffect2 from "../../components/18_12_23(UseEffect)/useEffect2";
import UseEffect3 from "../../components/18_12_23(UseEffect)/useEffect3";
import UseRef from "../../components/18_12_23(UseEffect)/useRef";

const AboutScreen = () => {
  return (
      <>
        <Navbar/>
        <h2>Hello i'm About screen</h2>
        <UseEffect1/>
        <UseEffect2/>
        {/* <UseEffect3/> */}
        <UseRef/>
    </>
  );
};
export default AboutScreen;
