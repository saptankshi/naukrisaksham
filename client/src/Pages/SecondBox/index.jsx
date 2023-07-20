import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { RedButton } from "../../components/AppButton";
import ImageBoxAvatar from "../../Assets/images/6920 1.png"

import "./style.css"
export default function SecondBox() {
  return (
    <Box className="secondBox">
      <Box className="headers2">
        <Typography className="boldFont" sx={{ fontWeight: "bolder" }}
          variant="h4">Why NaukriSaksham</Typography>
      </Box>
      <Box className="paragraph2">
        <Typography>
          Lorem ipsum dolor sit amet consectetur. Nibh nisi in tincidunt scelerisque ultrices nisl eu. Neque netus mauris a mauris porttitor <br /> pellentesque et vel lectus. Bibendum semper mi blandit massa erat eu et pretium in. Accumsan dictum condimentum mi amet. Orci massa<br /> ut commodo sit lectus enim augue.
        </Typography>
      </Box>
      <Box className="imageBox">
        <Box className="imageBoxContent">
          <Box className="imageBoxTextSection">
            <Box className="imageBoxHeader">
              <Typography className="boldFont" sx={{ fontWeight: "bolder" }} variant="h5">NS Is For Whom?</Typography>
            </Box>
            <Box className="imageBoxUlList">
              <ul>
                <li className="imageBoxLi">Students from any year of undergraduate programs</li>
                <li className="imageBoxLi">Students from B.Tech, M.Tech, BCA, MCA, BBA, BSc, MSc, and Diploma programs</li>
                <li className="imageBoxLi">Recent graduates who have not yet secured a placement or are unsatisfied with their current placement</li>
                <li className="imageBoxLi">Individuals looking to transition from non-core to core streams</li>
                <li className="imageBoxLi">Individuals interested in switching from non-IT to the IT domain.</li>
              </ul>
            </Box>
            <Box className="imageBoxBtn">
              <RedButton BtnText="Get Started" />
            </Box>
          </Box>
          {/* <Box className="imageBoxAvatar">
            <img className="imageBoxBoyImage" src={ImageBoxAvatar} alt="" />
          </Box> */}
        </Box>
      </Box>
    </Box>
  )
}