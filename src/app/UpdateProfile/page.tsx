"use client";
import { Card, Typography, TextField, Button, Box, Stack, Link } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/navigation';
import { useState } from "react";

const Profile = ()=>{
    const router = useRouter()

    const [formData, setFormData] = useState({
      header: "",
      description: "",
      FullName:"",
      Role: "",
      GradYear:"",
      ClubName:"",
      Domain:"",
      Linkedin:"",
      Github:"",
      Skills:"",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  return(
      <Card
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#ffffff",
        py:"4vw",
        px:"6.5vw",
        width: "90%",
        height: "100%",
        borderRadius:0,



      }}
      >
        <Box sx={{

                  display:"flex",
                  justifyContent:"flex-start",
                  gap:30,
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


            <TextField
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#2A2A2A",
              },
              "&:hover fieldset": {
                borderColor: "#0360BC",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0360BC",
              },
            },
            mt:"10px"
            }}
            fullWidth
            label="Enter Full Name"
            variant="outlined"
            name="FullName"
            value={formData.FullName}
            onChange={handleChange}
            />

            <Box>
                  <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Your Role"
                variant="outlined"
                name="Role"
                value={formData.Role}
                onChange={handleChange}
              />
            </Box>

            <Box>
              
            <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Year of Graduation"
                variant="outlined"
                name="GradYear"
                value={formData.GradYear}
                onChange={handleChange}
              />
            </Box>

          </Box>{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Box sx={{  width:"500px"}}>
                
          <Box>
            
          <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Club Name"
                variant="outlined"
                name="ClubName"
                value={formData.ClubName}
                onChange={handleChange}
              />

          </Box>

          <Box>
            
          <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Domain"
                variant="outlined"
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
              />

          </Box>

          <Box sx={{display:"flex", flexWrap:"wrap", maxWidth:500}}>
          <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Skills"
                variant="outlined"
                name="Skills"
                value={formData.Skills}
                onChange={handleChange}
              />


          </Box>

          <Box>
          <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Github Link"
                variant="outlined"
                name="Github"
                value={formData.Github}
                onChange={handleChange}
              />    
          </Box>

          <Box>

            <TextField
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2A2A2A",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0360BC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#0360BC",
                    },
                  },
                  mt:"10px"
                }}
                fullWidth
                label="Enter Linkedin id"
                variant="outlined"
                name="Linkedin"
                value={formData.Linkedin}
                onChange={handleChange}
              />         

             
            
          </Box>
            <Box>

                  <Button variant="contained" color="success" sx={{mt:"10px", width:"100%",height:70, fontSize:"30px", borderRadius:"10px" }} onClick={()=>{router.push("/profile")}}> Save</Button>              

                
                
            </Box>
          </Box>
        </Box>

      </Card>
)
}

export default Profile;
