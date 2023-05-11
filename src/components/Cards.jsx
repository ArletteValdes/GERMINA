
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContexto } from "../Context/Contexto";

const Cards = ({info}, filteredItems) => {


  const { addFav, removeFav, fav} = useContexto();

  return (

      <Card className="cardBody" elevation={2}>
        <div className="titulo">
          <CardHeader
            action={<IconButton aria-label="settings"></IconButton>}
            title={info.nombre}
          />
          <CardActions>
            {fav ? <IconButton  onClick={() => {removeFav(info);}}> <FavoriteIcon /> </IconButton> : 
             <IconButton disabled={fav.some((img) => img.id == info.id)} onClick={() => { addFav(info)}}>
                <FavoriteIcon />
              </IconButton>
            }
          </CardActions>
        </div>

        <CardMedia sx={{ height: 280 }} image={info.url} />

        <CardContent>
          <Typography className="price" variant="body" color="text.primary">
            ${info.valor.toLocaleString("en")}
          </Typography>
        </CardContent>
      </Card>

  );
};

export default Cards;
