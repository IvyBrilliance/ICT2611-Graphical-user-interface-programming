import React from "react";
import { app } from "../base";
import { useForm } from "react-hook-form";

function TestUpload() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const file = data.image[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded the file: "+ file.name);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('image')}
        name="image"
        type="file" />
		<input  id="submitButton" className="btn btn-primary" type="submit" />

    </form>
  );
}

export default TestUpload;
