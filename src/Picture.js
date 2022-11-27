import "./Picture.css";
// import ufo from "./res/placeholder.jpg";
// console.log(ufo);
function Picture(props) {
  return (
    <div className="Picture">
      <img src={props.imageSrc} alt="placeholderJpg"></img>
      {/* <img src="res/placeholder.jpg" alt="placeholderJpg"></img> */}
      <p>
        Location: {props.location}, <br></br> Date: {props.date}
      </p>
    </div>
  );
}

export default Picture;
