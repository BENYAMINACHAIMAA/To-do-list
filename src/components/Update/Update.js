
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; {/*the icon for the sanckbar*/}
export default function Updating(){
  return(
    <> 
    <Card>
      <CardHeader
  title={<h2 style={{ color: "blue" }}>Updating The Mission</h2>}
/>

<CardContent>

 <TextField id="standard-basic" label="Titel" variant="standard" />
 <TextField id="standard-basic" label="detailes" variant="standard" />
</CardContent>


<CardActions>
      {/* buttons section */}
    <Button variant="outlined">Update</Button>
    <Button variant="outlined">Cancel</Button>
</CardActions>

    </Card>
    </>
  )
}

{/* import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
} */}