const DateComp = (prop) => {
    return (
      <div>
        <h2>
          {prop.greeting} user, today is {prop.day}, month is {prop.Month}, year is {prop.year} {prop.season}
        </h2>
      </div>
  );
}
export default DateComp
export const BtnComponent = ({ btnProperties }) => {
  const{text,bgcolor,color,width}=btnProperties
  return (
    <>
      <button style={{backgroundColor:bgcolor,color,width}}>{ text}</button><br/>
    </>
  )
}