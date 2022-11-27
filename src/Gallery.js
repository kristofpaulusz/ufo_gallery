import "./Gallery.css";
import Picture from "./Picture";
const myArray = [
  {
    id: "ufo1",
    // picture_src: "./res/placeholder.jpg",
    picture_src: "res/placeholder.jpg",
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
    location: "Roswell",
    date: 1947,
  },
  {
    id: "ufo4",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "Roswell.jpg",
    location: "Roswell",
    date: 1947,
  },
  {
    id: "ufo5",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "Roswell.jpg",
    location: "Roswell",
    date: 1947,
  },
  {
    id: "ufo6",
    picture_src: "res/placeholder.jpg",
    placeholderTxt: "Roswell.jpg",
    location: "Roswell",
    date: 1947,
  },
];
// function srcKiszed(adat) {
//   let l = String(adat);
//   console.log(l);
//   return require(l);
// }
function Gallery() {
  return (
    <div className="PicGallery">
      {myArray.map((event) => {
        // {
        //   console.log(event.picture_src);
        // }
        return (
          <Picture
            location={event.location}
            date={event.date}
            key={event.id}
            imageSrc={event.picture_src}
          />
        );
      })}
    </div>
  );
}
export default Gallery;
