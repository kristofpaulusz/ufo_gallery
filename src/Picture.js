import "./Picture.css";
// import ufo from "./res/placeholder.jpg";
// console.log(ufo);
function test(id) {
  console.log(id)
}
function Picture(props) {
  function click() {
    console.log(props.identity);
  }
  return (
    <div className="Picture">
      <img src={props.imageSrc} onClick={click} alt="placeholderJpg"></img>
      {/* <img src="res/placeholder.jpg" alt="placeholderJpg"></img> */}
      <p>
        Location: {props.location}, <br></br> Date: {props.date}
      </p>
    </div>
  );
}

export default Picture;
