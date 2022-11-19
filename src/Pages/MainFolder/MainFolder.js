import React, { useState, useEffect } from "react";
import { FcFolder } from "react-icons/fc";
import { AiOutlinePlus,  } from "react-icons/ai";
import MainFolderCard from "./MainFolderCard";

const MainFolder = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/folder")
      .then((res) => res.json())
      .then((data) => setFolders(data));
  }, []);

  return (
    <div
      className="card w-96 bg-base-100 shadow-xl mx-auto my-24"
      data-theme="lofi"
    >
      <div className="card-body">
        <h2 className="text-3xl text-center mb-8 bg-slate-200 rounded-lg py-2">
          {" "}
          Folder Structure{" "}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <FcFolder className="mr-2"></FcFolder>
            <span>Root</span>
          </div>
          <label
            htmlFor="my-folder"
            className="flex justify-start items-center bg-slate-200 rounded-md px-2"
          >
            <AiOutlinePlus></AiOutlinePlus>
            <p>New</p>
          </label>
        </div>


        {
          folders.map(folder => <MainFolderCard key={folder._id} folder={folder}></MainFolderCard>)
        }

      </div>
    </div>
  );
};

export default MainFolder;
