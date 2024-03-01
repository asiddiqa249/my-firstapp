import Prop from "./prop";

const Parent = () => {
    const data="hello child"
    return (
        <>
            <h1>Sample</h1> 
            <Prop passingData={data}/>
        </>
    )
}
export default Parent;