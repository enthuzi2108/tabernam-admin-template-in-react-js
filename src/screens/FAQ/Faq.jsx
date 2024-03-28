/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // Importing ThemeContext
import { useContext } from "react"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useContext(ThemeContext);
  

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    {/* <h2>FAQ</h2> */}
    <div
      style={{
        width: "65%",
        height:'100%',
        margin: "40px 0 0 180px",
        borderRadius: "10px",
        border: "1px solid grey",
        padding: "20px",
        borderColor: "gainsboro",
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
        background: theme === "light" ? "white" : "#383854", // Applying theme based on context
        color: theme === "light" ? "#383854" : "white",
      }}
    >
      <Typography variant="h4" style={{ textAlign: "center", margin: "15px" }}>
        FAQ's{" "}
        <QuestionMarkIcon sx={{ fontSize: "34px", marginBottom: "18px" }} />
      </Typography>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white",     
      
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            What is Covid 19?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            COVID-19, short for "Coronavirus Disease 2019," is an infectious
            disease caused by the severe acute respiratory syndrome coronavirus
            2 (SARS-CoV-2). It was first identified in December 2019 in the city
            of Wuhan, Hubei province, China, and has since become a global
            pandemic.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}    
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How it is transmitted?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The virus primarily spreads through respiratory droplets when an
            infected person coughs, sneezes, or talks. It can also spread by
            touching surfaces contaminated with the virus and then touching
            one's face.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            What are the symptoms?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Symptoms of COVID-19 can range from mild to severe and may appear
            2-14 days after exposure. Common symptoms include fever, cough,
            shortness of breath, fatigue, muscle or body aches, headache, new
            loss of taste or smell, sore throat, congestion or runny nose,
            nausea or vomiting, and diarrhea.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How severe it is?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While many cases are mild or asymptomatic, some individuals,
            particularly those with underlying health conditions or older
            adults, may develop severe illness, including pneumonia and
            respiratory failure. COVID-19 can be fatal in some cases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How it can be prevented?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Preventive measures include wearing masks, practicing physical
            distancing, washing hands frequently with soap and water, avoiding
            close contact with sick individuals, covering coughs and sneezes,
            cleaning and disinfecting frequently touched surfaces, and getting
            vaccinated.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How someonecan get vaccinated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vaccines have been developed and authorized for emergency use to
            help prevent COVID-19. Vaccination efforts aim to achieve herd
            immunity, where a sufficient portion of the population is immune to
            the virus, reducing its spread.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelbh-content"
          id="panelbh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            What is the impact?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The COVID-19 pandemic has had far-reaching impacts on public health,
            economies, and daily life worldwide. It has led to widespread
            illness, hospitalizations, deaths, disruptions in healthcare
            systems, travel restrictions, social distancing measures, remote
            work, and economic challenges.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        sx={{ bgcolor: theme === "light" ? "white" : "#2e2e48",
        color: theme === "light" ? "black" : "white"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How is the global response?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Governments, healthcare organizations, researchers, and communities
            around the world have collaborated to respond to the pandemic.
            Efforts have included testing, contact tracing, treatment
            development, vaccination campaigns, public health messaging, and
            research to better understand the virus and its effects.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
}
