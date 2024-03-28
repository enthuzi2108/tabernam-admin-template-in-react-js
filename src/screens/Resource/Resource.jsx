/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Card, CardContent, CardActionArea, Grid, Container } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext'; 

const Resources = () => {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    borderRadius: '10px',
    backgroundColor: theme === 'dark' ? '#2e2e48' : '#fff',
    color: theme === 'dark' ? '#fff' : '#2e2e48',
  };

  return (
    <>
    {/* <h2>Resources</h2> */}
    <div style={{ display: 'flex', justifyContent: 'center',paddingLeft:'10px',paddingTop:'40px' }}>
      <Container 
        maxWidth="md" 
        style={{ 
          border: '1px', 
          padding: '20px', 
          marginTop: '30px',
          borderRadius: '10px',
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          
          
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={cardStyle}> 
              <CardActionArea component="a" href="https://www.who.int/" target="_blank">
                <CardContent>
                  <h2>WHO</h2>
                  <p>Global updates, guidance</p>
                </CardContent>
              </CardActionArea>
            </Card >
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={cardStyle}> 
              <CardActionArea component="a" href="https://www.cdc.gov/index.html" target="_blank">
                <CardContent>
                  <h2>CDC</h2>
                  <p>Offering guidance on prevention, symptoms, testing</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={cardStyle}> 
              <CardActionArea component="a" href="https://coronavirus.jhu.edu/map.html" target="_blank">
                <CardContent>
                  <h2>Johns Hopkins University </h2>
                  <p>Offers global COVID-19 statistics and visualizations</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={cardStyle}> 
              <CardActionArea component="a" href="https://www.helpguide.org/category/health-wellness" target="_blank">
                <CardContent>
                  <h2>Support Groups</h2>
                  <p>Online community that offer support </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
    </>
  );
};

export default Resources;
