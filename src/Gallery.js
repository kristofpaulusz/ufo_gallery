import { useState } from "react";
import "./Gallery.css";
import Large from "./Large";
import Model from "./Model/Model";
import Picture from "./Picture";
const myArray = [
  {
    id: "ufo1",
    // picture_src: "./res/placeholder.jpg",
    picture_src: "res/rswel.jpg",
    placeholderTxt: "Roswell.jpg",
    location: "Roswell",
    date: 1947,
  },
  {
    id: "ufo2",
    picture_src: "res/socal.jpg",
    placeholderTxt: "socal.jpg",
    location: "Southern California",
    date: 2004,
  },
  {
    id: "ufo3",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "Roswell.jpg",
    location: "Hudson Valley",
    date: 1980,
  },
  {
    id: "ufo4",
    picture_src: "res/pacific.png",
    placeholderTxt: "pacific.png",
    location: "Pacific Ocean",
    date: 2019,
  },
  {
    id: "ufo5",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "placeholder.jpg",
    location: "N/A",
    date: 1000,
  },
  {
    id: "ufo6",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "placeholder.jpg",
    location: "N/A",
    date: 1000,
  },
];
// function srcKiszed(adat) {
//   let l = String(adat);
//   console.log(l);
//   return require(l);
// }
function Gallery() {
  const model = new Model(myArray[0].picture_src);
  const [largePic, setLarge] = useState(model.getCurrent());
  function setImage(src) {
    setLarge(src);
  }
  return (
    <div className="PicGallery">
      {/* <button
        onClick={() => {
          setLarge(model.getCurrent());
        }}
      ></button> */}
      <Large current={largePic} />
      {myArray.map((event) => {
        return (
          <Picture
            location={event.location}
            date={event.date}
            key={event.id}
            imageSrc={event.picture_src}
            identity={event.id}
            ev={setImage}
          />
        );
      })}
    </div>
  );
}
export default Gallery;
