import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/router";

export const DropFile = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const router = useNavigate();
  const onSubmit = (type) => {
    console.log(type)
    if(type==='upload') {
      router("/stream").then();
    }
    else{
      console.log("asd")
      const isNotValid = file.includes('youtube')
      if(isNotValid){
        setError('We do not accept YOUTUBE links')
      }
      else{
      router(`/stream?id=${file}`)
      setError("")
    }}
  };
  return (
    <div className="w-full md:h-[515px] pb-[80px] items-center bg-[#dfdbe6]" id="stream">
      <div className="text-3xl">
        <h5 className="text-center py-10 px-4 font-italic  mx-auto bg-[#242125] text-[#f4effa]">
          <span>
            <p>Stream unlimited images and videos in VR with one click.</p>
          </span>
        </h5>
      </div>
      <div className=" mt-[7rem] gap-[70px] my-auto  flex flex-wrap justify-center mx-auto">
        <div className="flex flex-col md:flex-row gap-4  md:gap-16">
          <div className="parent-container h-40 w-76 cursor-pointer rounded-xl bg-gray-100 border-dashed border-2 border-gray-400 relative flex justify-center items-center relative" >
            <div className="w-64 h-20 flex justify-center items-center">
              <div className="mr-2"  >
                <svg
                  className="upload-icon bi bi-cloud-arrow-up-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
                </svg>
              </div>
              <div  onClick={() => onSubmit("upload")}>
                <p className="text-gray-500 mb-1 text-lg file_name">
                  Upload your Image/Video
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto"><h2 className="m-auto text-center py-2 font-bold text-[#242125]">
          OR
        </h2></div>
          <form className="my-auto">
            
            <label className="block">
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter image/video URL."
                onChange={(e) => setFile(e.target.value)}
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Enter valid link.
              </p>
            </label>
            <div className="mt-[-15px] mx-auto">
              <button
                className="items-center rounded-full px-8 py-1 border border-white font-semibold  hover:bg-white hover:text-black"
                type="button"
                onClick={onSubmit}
              >
                Go
              </button>
              <p className={"max-w-[790px] text-red-500 mt-4 font-semibold mx-auto"}>
              {error}
            </p>
            </div>
          </form>
        </div>

      </div>
     
    </div>
  );
};

export default DropFile;