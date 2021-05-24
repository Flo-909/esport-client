import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({getImageUrl}) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleChange = async (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
  

    axios.post(process.env.REACT_APP_BACKEND + "/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        contentType: false,
      })
      .then((res) => {
        getImageUrl(res.data.resultCloudinary.secure_url)
        console.log("res.data", res.data)
      })
      .catch((error) => console.error(error));
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={handleChange}
        name="file"
        accept=".jpg, .png, .jpeg"
        type="file"
        placeholder="upload image"
      />
      <button>submit</button>
    </form>
  );
};

export default ImageUpload;
