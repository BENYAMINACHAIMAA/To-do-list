
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
export default function Delete(){

  return(
    <>
    <Card>
 <CardHeader
          title="Are You Sure You want to delete"
          action={<DeleteIcon />}
        />
        <CardContent >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eius harum voluptatum voluptate, corrupti perspiciatis cumque aliquam similique dignissimos aperiam ea doloremque voluptates est nulla sit molestias rem atque incidunt?

        </CardContent>
  <CardActions>
<Button variant="outlined">Yes, Delete</Button>
    <Button variant="outlined">Cancel</Button>
  
  </CardActions>
    </Card>
    </>
  )
}