import "./Large.css";
function Large(props) {
  return (
    <div className="large">
      <img src={props.current} alt="ufoPic"></img>
    </div>
  );
}
export default Large;
