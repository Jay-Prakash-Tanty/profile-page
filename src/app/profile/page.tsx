"use client";
import { Card, Typography, TextField, Button, Box, Stack, Link } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/navigation';
import "../globals.css";
import '@fontsource/poppins/400.css'; 
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css'; 

const Profile = ()=>{

  const router = useRouter()
  return(
    
      <Card
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#ffffff",
        py:"4vw",
        px:"6.5vw",
        width: "100%",
        height: "100%",
        borderRadius:0,
        



      }}
      >
        <Box sx={{

                  display:"flex",
                  justifyContent:"flex-start",
                  gap:40,
                  border: "6px solid #A0A0A0",
                  borderRadius:7,
                  py:"4vw",
                }}>

          <Box sx={{
            ml:10,
          }}>

            <Box 
            sx={{display:"flex",
                 justifyContent:"center"           
            }}
            >
              <Avatar
                alt="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  sx={{
                    bgcolor: 'secondary.main',  
                    width: 250,                  
                    height: 250,
                  }}
              />
            </Box>

            <Box>
              <Typography sx={{ textAlign: "center", mt:"10px", fontSize:"30px", }}>Olivera Jhones</Typography>
            </Box>

            <Box>
              <Typography sx={{ textAlign: "center", mt:"10px", fontSize:"20px"}}>Role</Typography>
            </Box>

            <Box>
              <Typography sx={{ textAlign: "center", mt:"10px", fontSize:"20px"}}>Year of graduation(2027)</Typography>
            </Box>

            <Box>

            </Box>  

          </Box>
          <Box sx={{}}>
                
          <Box>
            <Typography sx={{mt:"10px", fontSize:"40px"}}>Club name : Enigma</Typography>
          </Box>

          <Box>
            <Typography sx={{mt:"10px", fontSize:"40px"}}>Domain : Web Development </Typography>
          </Box>

          <Box sx={{display:"flex", flexWrap:"wrap", maxWidth:500,mb:"12px"}}>
            <Typography sx={{mt:"10px", fontSize:"30px"}}>Skills:</Typography>
            <Stack spacing={2} direction="row" sx={{ml:7,display:"flex", flexWrap:"wrap", alignItems:"center"}}>
              <Button variant="contained" sx={{borderRadius:"20px", height:"44px", bgcolor:"rgb(25,118,210,0)"}}>java</Button>
              <Button variant="contained" sx={{borderRadius:"20px", height:"44px", bgcolor:"rgb(25,118,210,0.1)"}}>html</Button>
              <Button variant="contained" sx={{borderRadius:"20px", height:"44px", bgcolor:"rgb(25,118,210,0.1)"}}>css</Button>
            </Stack>

          </Box>

          <Box>
            <Link
              target="_blank" 
              href="https://www.vssut.ac.in/" >
                <Button variant="contained" color="success" sx={{mt:"10px", width:400,height:70, fontSize:"25px", borderRadius:"10px", bgcolor:"rgb(56,142,60,0.8)"}}>GitHUb link</Button>              
            </Link>
          </Box>

          <Box>
          <Link
              target="_blank" 
              href="https://www.vssut.ac.in/" >
                <Button variant="contained" color="success" sx={{mt:"10px", width:400,height:70, fontSize:"25px", borderRadius:"10px", bgcolor:"rgb(56,142,60,0.8)" }}> Linkdin link</Button>              
          </Link>
             
            
          </Box>
          <Box>
            <Link
              href="/UpdateProfile" >
                <Button variant="contained" color="success" sx={{mt:"10px", width:400,height:70, fontSize:"25px", borderRadius:"10px", bgcolor:"rgb(56,142,60,0.8)" }} onClick={()=>{router.push("/UpdateProfile")}}>Update Profile</Button>              
            </Link>

            <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
          </Box>
          </Box>
         
        </Box>
       

      </Card>
)
}

export default Profile;
