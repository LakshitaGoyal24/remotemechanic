import { useState } from "react";
import axios from "axios";
function App() {
  const [image, setImage] = useState("");
  const [imageFile, setFile] = useState();
  const getImage = (e) => {
    setFile(e.target.files[0]);
  }
  const uploadImage = (e) => {
    e.preventDefault()  //prevent browser to refresh
    const formData = new FormData();  //create new form object
    formData.append("myImage", imageFile);//add image to form object
    axios({
      method: "post",
      url: "http://localhost:5000/upload-image",
      data: formData,  //send image to server
    })
     .then((response) => {
      const { data } = response; //return image url of uploaded img
      setImage(data.url); //set url to image variable
    })
     .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className="App">
      <h4>Image from server</h4>
      <div className="imageBox">
        <img src={image} width="100%"></img>
      </div>
      <hr></hr>
      <h4>Image Preview</h4>
      <form onSubmit={uploadImage}>
        <input type="file" onChange={getImage}></input>
        <button type="submit">upload</button>
      </form>
    </div>
  );
}
export default App;