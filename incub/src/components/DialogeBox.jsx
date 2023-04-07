import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>VIEW</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">More Details</DialogTitle>
        <DialogContent dividers={scroll === 'paper'} sx={{ width: '25vw', height: '50vh' }} >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography>Name</Typography>
            <OutlinedInput fullWidth size='small' defaultValue={props.data.name} readOnly sx={{ marginBottom: '20px' }} />
            <Typography>Email</Typography>
            <OutlinedInput fullWidth size='small' defaultValue={props.data.email} readOnly sx={{ marginBottom: '20px' }} />
            <Typography>Company Name</Typography>
            <OutlinedInput fullWidth size='small' defaultValue={props.data.company} readOnly sx={{ marginBottom: '20px' }} />
            <Typography>Description</Typography>
            <Typography>{props.data.descrip_1}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}