const ButtonPropComponent = ({bgcolor="red", text="hello", color="black"}) => {
  // const {bgcolor,text,color}=props
  return (
    <button
      onClick={() => {
        alert("clicked");
      }}
      style={{
        backgroundColor: bgcolor,
        color,
      }}
    >
      {text}
    </button>
  );
};
export default ButtonPropComponent;

// export const ButtonPropComponent1 = () => {
//     return (
//         <button onClick={()=>{alert("clicked")}}>Signup</button>
//     )
// }