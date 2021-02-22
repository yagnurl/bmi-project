import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { palette } from '@material-ui/system'
import '../styles.css'
const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#F2A154 !important"
  },
  root: {
    width: "70%",
    marginTop: theme.spacing(20),
    margin: 'auto',


  },

  stepper: {
    backgroundColor: "#BED9C7 !important",

  },

  button: {
    backgroundColor: "#F2A154 !important",


    margin: theme.spacing(3)
  },
  actionsContainer: {

    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(0),
    backgroundColor: "#BED9C7 !important",

  }
}));

function getSteps() {
  return [
    "So, you wanna learn about BMI Huh? ",
    "BMI, is a short term for Body Mass Index. ",
    "Want to know about your BM Index?"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Let's begin, shall we? Okay so basically BMI is "Body Mass Index" which is a technique to 
      determine a persons fat & weight standarts. Such as 18 to 24.9. Which in turn equals to your Mass Index.`;
    case 1:
      return "For adults 20 years old and older, BMI is interpreted using standard weight status categories. These categories are the same for men and women of all body types and ages. Such as, Below 18.5, which BMI indexes as 'Underweight', above 18.5 and below 24.9, which BMI indexes as 'Normal or Heavyweight', above 25.0 and below 29.9 indexes as 'Overweight' and lastly, over 30.0 indexes as 'Obese'. ";
    case 2:
      return `Alright, so you seem to catch up with me! How about i take you to a trip to learn your BMI status and give you proper daily intake recommendation? Follow me to next step then!`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} >
      <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconProps={{
              classes: {
                active: classes.icon
              }
            }}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "The Last Step to Calculate BMI"
                      : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Link to={`/`}>
            <Button onClick={handleReset} className={classes.button}>
              Let's Calculate Your BMI.
            </Button>
          </Link>
        </Paper>
      )}
    </div>
  );
}
