import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { AiOutlinePlus, AiOutlineCloseCircle } from "react-icons/ai";

const MainFolderCard = ({folder}) => {
    const {name} = folder;
  return (
    <div className="mx-4 flex justify-between items-center">
      <div className="flex justify-start items-center ">
        <FcOpenedFolder className="mr-2"></FcOpenedFolder>
        <span>{name}</span>
        <AiOutlineCloseCircle className="ml-2"></AiOutlineCloseCircle>
      </div>
      <label
            htmlFor="my-folder"
            className="flex justify-start items-center bg-slate-200 rounded-md px-2"
          >
            <AiOutlinePlus></AiOutlinePlus>
            <p>New</p>
          </label>
    </div>
  );
};

export default MainFolderCard;
