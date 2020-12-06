import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from "@material-ui/core/Button";
import CallIcon from '@material-ui/icons/Call';
import "./SwipeButtons.css";
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 95,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const StyleButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #388e3c 30%, #388e3c 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 95,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const BlueButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, rgb(100, 141, 174) 30%, rgb(100, 150, 174) 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 95,
      padding: '0 30px',
      boxShadow: '0 3px 3px 2px grey',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
 
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
                 <StyledButton><CloseIcon fontSize="large" />IGNORE</StyledButton>
            <Button className="swipeButtons__call" variant="contained" color="default">
                 <CallIcon fontSize="large" /> CALL NOW
            </Button>
            <BlueButton><FavoriteIcon fontSize="large" />WAIT LIST</BlueButton>
            <StyleButton><CheckIcon fontSize="large" />HIRE NOW</StyleButton>
        </div>
    );
};

export default SwipeButtons;


