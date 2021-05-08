import './PopupFeedback.css';
import Popup from "../Popup/Popup";
import FormFeedback from "../FormFeedback/FormFeedback";
import { Typography } from '@material-ui/core';

function PopupFeedback({ open, close, openPolicy }) {

  return (
    <Popup 
      open={open}
      close={close}
      classContainer="feedback"
    >
      <Typography 
        variant="h2"
        align="center"
        className="popup__title popup__title_feedback"
      >
        Обратная связь
      </Typography>
      <FormFeedback openPolicy={openPolicy}/>
    </Popup>
  );
}

export default PopupFeedback;
