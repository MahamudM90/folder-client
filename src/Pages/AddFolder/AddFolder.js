import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
const AddFolder = () => {
  const [add, setAdd] = useState({});
  const handleAddFolder = (event) => {
    event.preventDefault();
    console.log(add);

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Create Successfully !");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newAdd = { ...add };
    newAdd[field] = value;
    setAdd(newAdd);
  };
  return (
    <>
      <input type="checkbox" id="my-folder" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-folder"
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-primary text-center font-bold mb-5">Add A New Folder</h3>
          <div className="ml-5">
            <form onSubmit={handleAddFolder} className="flex flex-col justify-center items-center">
              <input
                onBlur={handleInputBlur}
                type="text"
                name="name"
                placeholder="Enter a folder name"
                className="input input-bordered input-md w-full max-w-xs"
                required
              />
              <div className="flex items-center justify-center gap-5">
                <button className="btn btn-primary my-5">Cancel</button>
                <button className="btn btn-primary my-5">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFolder;
