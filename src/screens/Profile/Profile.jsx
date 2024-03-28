// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { 
//   Button, Grid, Box, Paper, Avatar, Typography, Radio, RadioGroup, 
//   FormControlLabel, FormControl, FormLabel, TextField } from '@mui/material';
// import { useTheme } from "../../context/ThemeContext";
// import { ThemeProvider } from "@emotion/react";

// const Profile = () => {
 
//   const { user, isAuthenticated } = useAuth0();
//   const { theme } = useTheme();
//   const [basicInfo, setBasicInfo] = useState({
//     name: user ? user.name : '',
//     email: user ? user.email : '',
//     age: '',
//     location: '',
//     gender: '', // New field for gender
//     phoneNumber: '', // New field for phone number
//     address: '', // New field for address
//   });
//   const [covidInfo, setCovidInfo] = useState({
//     covidStatus: 'Negative',
//     vaccinationStatus: '',
//   });

//   useEffect(() => {
//     // Load data from local storage when the component mounts
//     const savedBasicInfo = JSON.parse(localStorage.getItem('basicInfo'));
//     const savedCovidInfo = JSON.parse(localStorage.getItem('covidInfo'));
//     if (savedBasicInfo) {
//       setBasicInfo(savedBasicInfo);
//     }
//     if (savedCovidInfo) {
//       setCovidInfo(savedCovidInfo);
//     }
//   }, []);

//   const handleBasicInfoChange = (e) => {
//     const { name, value } = e.target;
//     setBasicInfo({ ...basicInfo, [name]: value });
//   };

//   const handleGenderChange = (e) => {
//     setBasicInfo({ ...basicInfo, gender: e.target.value });
//   };

//   const handleSave = () => {
//     // Save data to local storage
//     localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
//     localStorage.setItem('covidInfo', JSON.stringify(covidInfo));
//     console.log('Data saved:', { basicInfo, covidInfo });
//   };
//   // const handleChangePassword = () => {
//   //   if (isAuthenticated) {
//   //     // Redirect the user to Auth0's change password page
//   //     window.location.href = 'https://dev-axo0f661tal1klot.us.auth0.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBJbEVTaEVwa3dfR2FkenZjQ2U0cUdCZ0dpT3FOSG1pbaFurnJlc2V0LXBhc3N3b3Jko3RpZNkgeFhpZ0JuUS1ZRkUzbmlZZ0dwT0FyVnFUNnRzeG5MbnWjY2lk2SAyWnVaQmxqSXRWb1p1aDZvbWRtRm1rdHRxOXh5Znk5Rg'
//   //   }
//   // };

//   return (
    
//     <div style={{ padding: '16px' }}>
//       <Paper elevation={3}  sx={{
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//           backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
//           color: theme === 'light' ? '#000' : '#FFF',
//          }}>

//         <Avatar sx={{ width: 100, height: 100, margin: 'auto', marginBottom: '16px' }}>
//           {isAuthenticated && user ? (
//             <img src={user.picture} alt={user.name} />
//           ) : (
//             <Avatar />
//           )}
//         </Avatar>
//         <form>
//           <Typography variant="h6" gutterBottom>
//             Basic Information
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Typography>Name: {basicInfo.name}</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Email Address: {basicInfo.email}</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Age: 25</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Location: India</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Gender: Male</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Phone Number: +123-34567</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
//             </Grid>
//           </Grid>
//           {/* COVID-19 Information Section */}
//           <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
//             COVID-19 Information
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Typography>COVID-19 Status: Negative </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Vaccination Status: Vaccinated</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Test Results: Negative</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Typography>Variant: Delta</Typography>
//             </Grid>
//           </Grid>
//           <Box mt={2} textAlign="center">
//             {/* <Button variant="contained" color="primary" onClick={handleSave}>
//               Save
//             </Button> */}
//           </Box>
//           {/* <Button onClick={handleChangePassword}>Change Password</Button> */}
//         </form>
//       </Paper>
//     </div>
//   );
// };

// export default Profile; 1st*******



import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { TextField, Button, Grid, Box, Paper, Avatar, Typography } from '@mui/material'; 
import { useTheme } from "../../context/ThemeContext";
 import { ThemeProvider } from "@emotion/react";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { theme } = useTheme();
  const [basicInfo, setBasicInfo] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    age: '',
    location: '',
    gender: '',
    phoneNumber: '',
    address: '',
  });
  const [covidInfo, setCovidInfo] = useState({
    covidStatus: '',
    vaccinationStatus: '',
    lastTestDate: '', // New field for last COVID-19 test date
    testType: '', // New field for type of COVID-19 test
    testResult: '', // New field for COVID-19 test result
    vaccineType: '', // New field for type of vaccine received
    vaccineDoses: '', // New field for number of vaccine doses received
  });

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedBasicInfo = JSON.parse(localStorage.getItem('basicInfo'));
    const savedCovidInfo = JSON.parse(localStorage.getItem('covidInfo'));
    if (savedBasicInfo) {
      setBasicInfo(savedBasicInfo);
    }
    if (savedCovidInfo) {
      setCovidInfo(savedCovidInfo);
    }
  }, []);

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const handleCovidInfoChange = (e) => {
    const { name, value } = e.target;
    setCovidInfo({ ...covidInfo, [name]: value });
  };

  const handleSave = () => {
    // Save data to local storage
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
    localStorage.setItem('covidInfo', JSON.stringify(covidInfo));
    console.log('Data saved:', { basicInfo, covidInfo });
    alert("Data saved successfully!");
  };

  return (
    <div style={{ padding: '16px' }}>
      <Paper elevation={3}  sx={{
           padding: '20px',
           borderRadius: '10px',
           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
           color: theme === 'light' ? '#000' : '#FFF',
          }}>
        <Avatar sx={{ width: 100, height: 100, margin: 'auto', marginBottom: '16px' }}>
          {isAuthenticated && user ? (
            <img src={user.picture} alt={user.name} />
          ) : (
            <Avatar />
          )}
        </Avatar>
        <form>
          <Typography variant="h6" gutterBottom sx ={{marginTop: '1rem',marginBottom:'1.5rem'}}>
            Basic Information
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
                value={basicInfo.name}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                value={basicInfo.email}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                name="age"
                type="number"
                fullWidth
                variant="outlined"
                value={basicInfo.age || '25'}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                name="location"
                fullWidth
                variant="outlined"
                value={basicInfo.location || 'India'}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Gender"
                name="gender"
                fullWidth
                variant="outlined"
                value={basicInfo.gender || "Male"}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                fullWidth
                variant="outlined"
                value={basicInfo.phoneNumber|| "+123-435343"}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                fullWidth
                variant="outlined"
                value={basicInfo.address || 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}
                onChange={handleBasicInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom style={{ marginTop: '1.5rem',marginBottom: '1.5rem' }}>
            COVID-19 Information
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="COVID-19 Status"
                name="covidStatus"
                fullWidth
                variant="outlined"
                value={covidInfo.covidStatus || 'Tested and Negative'}
                onChange={handleCovidInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Vaccination Status"
                name="vaccinationStatus"
                fullWidth
                variant="outlined"
                value={covidInfo.vaccinationStatus||'Vaccinated'}
                onChange={handleCovidInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                label="Test Result"
                name="testResult"
                fullWidth
                variant="outlined"
                value={covidInfo.testResult || 'Negative'}
                onChange={handleCovidInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number of Vaccine Doses"
                name="vaccineDoses"
                type="number"
                fullWidth
                variant="outlined"
                value={covidInfo.vaccineDoses || "2"}
                onChange={handleCovidInfoChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: theme === 'light' ? '#000' : '#FFF',
                    backgroundColor: theme === 'light' ? '#FFF' : '#2e2e48',
                    // borderRadius: (theme) => theme.shape.borderRadius,
                    
                  },
                  '& .MuiFormLabel-root': {
                    color: theme === 'light' ? '#000' : '#FFF',
                  }
                }}
              />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Profile;


// import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const Profile = () => {
//   const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchCustomUserData = async () => {
//       if (isAuthenticated) {
//         try {
//           const idTokenClaims = await getIdTokenClaims(); // Get ID token claims
//           const customUserData = idTokenClaims['https://randomuser.com/randomUser'];
//           setUserData(customUserData);
//           console.log(customUserData)
//         } catch (error) {
//           console.error('Error fetching custom user data:', error);
//         }
//       }
//     };

//     fetchCustomUserData();
//   }, [isAuthenticated, getIdTokenClaims]);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {isAuthenticated ? (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           {userData && Object.keys(userData).length > 0 && (
//             <div>
//               <p>City: {userData.city}</p>
//               <p>Street: {userData.street}</p>
//               <p>Phone: {userData.phone}</p>
//               {/* Add other relevant fields here */}
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Please log in to view your profile</p>
//       )}
//     </div>
//   );
// };

// export default Profile;

