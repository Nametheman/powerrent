import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import waves from "Assets/Illustrations/waves.svg";
import { createTheme, ThemeProvider } from "@mui/material";

export default function SimpleAccordion() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiAccordion: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            background: "#38b6ff",
            color: "#fff",
            width: "60%",
            maxWidth: "60%",
            fontWeight: "bold",
          },
        },
      },
    },
  });
  return (
    <Wrapper>
      <img className="waves" src={waves} alt="" />
      <img className="waves2" src={waves} alt="" />
      <div className="head">Why Rent From Us?</div>
      <div className="textWrap">
        <p className="text">
          Swatini PowerRent® is a leading provider of generator rentals,
          offering a range of solutions to meet the diverse power needs of
          businesses, events, and communities. Our extensive inventory of
          top-quality generators, combined with our expertise in generator power
          solutions, makes us the go-to choice for reliable and cost-effective
          power solutions.
        </p>
      </div>
      <AccordionWrapper>
        <ThemeProvider theme={theme}>
          <Accordion classes={"accordion"}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Reliable and efficient power supply</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                With our comprehensive selection of generators, we can provide
                you with the right equipment for your specific needs, ensuring a
                reliable and efficient power supply.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Cost-effective</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Renting a generator from Swatini PowerRent® eliminates the high
                upfront costs of purchasing a generator and the ongoing expenses
                of maintenance and storage.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Convenient access to generators</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our team will deliver and set up your generator on-site, saving
                you time and hassle. We also offer flexible rental options to
                ensure you have access to power when you need it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Expert support</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our team of experts will provide you with the support you need
                to ensure your generator runs smoothly, whether you need
                assistance with installation, operation, or maintenance.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ThemeProvider>
      </AccordionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 70px;
  margin-top: 90px;
  background-color: #38b6ff10;
  position: relative;

  .waves {
    position: absolute;
    width: 250px;
    height: 200px;
    opacity: 0.1;
    left: 0;
    top: -50px;
  }
  .waves2 {
    position: absolute;
    width: 250px;
    height: 200px;
    opacity: 0.1;
    right: 0;
    bottom: -50px;
  }
  .head {
    margin: 10px 0 30px;
    text-align: center;
    font-size: 29px;
    font-weight: 800;
  }
  .textWrap {
    display: flex;
    justify-content: center;
    .text {
      width: 60%;
      text-align: center;
      color: #5c5757;
    }
  }
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .accordion {
    background: red;
  }
`;
