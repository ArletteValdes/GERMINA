import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import planta2 from  "../assets/img/planta2.jpg";
import planta3 from  "../assets/img/planta3.jpg";
import planta4 from  "../assets/img/planta4.jpg";




export default function Cards() {



  return (
    <div className="cardDiv">

      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta2"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta2} alt="Planta2" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary"  >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>


      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta3"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta3} alt="Planta3" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary" >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>



      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta4"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta4} alt="Planta4" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary" >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>


      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta2"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta2} alt="Planta2" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary"  >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>


      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta3"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta3} alt="Planta3" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary" >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>



      <Card className="cardBody" sx={{ maxWidth:345}}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title="Planta4"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
       
          </CardActions>
        </div>

        <CardMedia component="img" height="250" image={planta4} alt="Planta4" />

        <CardContent >
          <Typography className="price" variant="body" color="text.primary" >
            $18.000
          </Typography>
        </CardContent>

  
  
      
      </Card>


     
    
    </div>

    
  );
}
