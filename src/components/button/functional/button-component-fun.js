// function ButtonComponentFun() {
//     return (
//         <div>
//             <button>Register</button>
//         </div>
//     )
// }
// export default ButtonComponentFun;

const ButtonComponentFun = ({ btnProp }) =>{
const{bgcolor,color,text,width}=btnProp
    return (
        <button style={{ 
            backgroundColor: bgcolor,
            color,
            width:width
        }}>{ text}</button>
    )
}
export default ButtonComponentFun;

// export const LoginComponent = () => {
//   return (
//     <div>
//       <button>Login</button>
//     </div>
//   );
// };
