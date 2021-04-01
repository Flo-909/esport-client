import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleChange = async (event) => {
    console.log("handleChange", event.target);
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log("e", e);
    e.preventDefault();
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    console.log(formData.get("image"));

    axios
      .post(process.env.REACT_APP_BACKEND + "/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        contentType: false,
      })
      .then((res) => console.log("res ==>", res.data))
      .catch((error) => console.error(error));
  };

  console.log("selectedImage", selectedImage);

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
