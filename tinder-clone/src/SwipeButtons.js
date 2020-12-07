import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import CallIcon from '@material-ui/icons/Call';
import "./SwipeButtons.css";
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 15,
      border: 0,
      color: 'white',
      height: 80,
      marginTop: 25,
      width:100,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const StyleButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #388e3c 30%, #388e3c 90%)',
      borderRadius: 15,
      width:100,
      border: 0,
      color: 'white',
      height: 80,
      marginTop: 25,
      width:100,
      padding: '0 10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const CallButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #008CBA 30%, #008CBA 90%)',
      borderRadius: 15,
      width:100,
      border: 0,
      color: 'white',
      height: 80,
      marginTop: 25,
      width:100,
      padding: '0 10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  
 
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
                 <StyledButton><CloseIcon fontSize="large" />IGNORE</StyledButton>
  <CallButton><CallIcon fontSize="large" />CALL NOW</CallButton>

            
            <StyleButton><CheckIcon fontSize="large" />HIRE NOW</StyleButton>
        </div>
    );
};

export default SwipeButtons;







