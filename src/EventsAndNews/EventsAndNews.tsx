import { Box, Typography, Grid } from "@mui/material";

import Left from "./Components/Left";
import Right from "./Components/Right";
import Middle from "./Components/Middle";

export default function EventsAndNews() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#1E1E1E]  flex-col items-center justify-center ">
      <Box sx={{display:"flex",flexDirection:"column", alignItems:"center"}} >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: {
              xs:"24px",
              md:"36px",

            },
            lineHeight: "54px",
            paddingTop: "10px",
          }}
        >
          Events and News
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
          
            
            fontSize: {
              xs:"16px",
              md:"20px"
            },
            
            lineHeight: "30px",
            color: "#757575",
            textAlign: "center",
            paddingBottom:"11px"
           
            
          }}
        >
          Stay Updated with the Latest Events and News
        </Typography>
      </Box>
      <Box >
        <Grid container direction="row" justifyContent="center" alignItems="center" gap="20px">
          <Grid item>
            <Left />
          </Grid>
          <Grid item ><Middle/></Grid>
          <Grid item ><Right/></Grid>
        </Grid>
      </Box>
    </div>
  );
}
