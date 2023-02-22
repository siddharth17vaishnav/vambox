import Head from "next/head";
import Footer from "@/components/Footer";
import ImageComponent from "@/components/ImageComponent";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import Modal from '@mui/material/Modal';
import {Box,Typography} from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background:'white',
  boxShadow: 24,
  p: 4,
};


export default function StreamVideo() {
  const [isOpen,setisOpen]=useState(true);
  const [image,setImage]=useState(null)
  // const router = useRouter();
  // const url = router.asPath.split("?")[1];
  // useEffect(() => {
  //   if (!router.asPath.split("?")[1]) {
  //     router.push("/");
  //   }
  // }, [router]);
  const url=""
  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);
  console.log(image)
  const handleChange=(e)=>{
    e.preventDefault();
    const objectURL = URL.createObjectURL(e.target.files[0])
    setImage(objectURL)
    handleClose();
  }
  return (
    <>
      <Head>
        <title>VAMBOX</title>
        <meta name="description" content="vambox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageComponent url={image} />
        <Footer />
      </main>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{my:2,fontWeight:'bold'}}> Select Your Image</Typography>
        <div className="parent-container h-40 w-76 cursor-pointer rounded-xl bg-gray-100 border-dashed border-2 border-gray-400 relative flex justify-center items-center relative" >
            <input
              type="file"
              id="input-file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleChange(e)}
            />
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
              <div  >
                <p className="text-gray-500 mb-1 text-lg file_name">
                  Upload your image
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
