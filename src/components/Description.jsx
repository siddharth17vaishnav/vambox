import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Description = () => {
  return (
    <div className="w-full h-full items-center bg-[#dfdbe6] pb-[92px]">
      <div className="text-3xl">
        <h5 className="text-center py-8 px-4 font-italic mx-auto bg-[#242125] text-[#f4effa]">
          <span>
            <p>We hope your experience is better than ours was.</p>
          </span>
        </h5>

        <div className="max-w-[1240px] text-xl text-[#343036] mx-auto py-10 px-4 text-justify ">
          <p>
            VAMBOX was born out of a painful experience of streaming video and
            images online in VR. To meet this need, we built a cool product for
            users to stream 360* videos and images, both online and offline.
            Metaverse is expanding, and we are making it available to you
            without any cost. Users can directly enter any link or can browse
            any internal file. Our mission is to make {"VR"} available for
            everyone.
          </p>
        </div>
        <div className="text-3xl">
          <h5 className="text-center py-4 px-4 font-italic mx-auto text-[#343036]">
            <span>
              <p>Frequently Asked Questions</p>
            </span>
          </h5>
        </div>
        <div className="max-w-[800px] text-xl text-[#343036] mx-auto px-4 text-justify mt-[30px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Which devices are supported?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                All android and ios devices are supported. You can use it with
                all VR headsets.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can I stream offline videos?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                Yes, of course. You can stream unlimited offline videos, we
                support mp4, webm, MOV.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can we stream normal images and videos?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                Yes, but such images and videos will get converted to 360* and
                it will not be that much good.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can I stream OTT plateform contents for free?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                No, we have not collaborated with any of the ott platforms, but we will be
                releasing it soon. Stay connected.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Why youtube videos are not playing?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                You cannot stream any contents from youtube, due to our policy
                issue. But, you can stream offline by downloading youtube video.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Why some video show blank screen?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-white bg-[#343036]/40">
              <Typography>
                This maybe happens because of CORS policy or the server is not allowing to access the content. We are trying to resolve this, in the meantime you can download and access that content. 
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Description;