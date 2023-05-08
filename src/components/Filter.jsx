import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useContexto } from "../Context/Contexto";


const Filter = ({ Plants }) => {

  const { addFav} = useContexto();
  const [isClick, setClick]=useState(false);
  const [filter, setFilter] = useState('todos');



  const filteredItems = Plants.filter((item) => (item.tipo === filter || filter === 'todos'));

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const setFilterAll=(event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <div className="filters">
        <Button
          variant={filter === "" ? "contained" : "outlined"}
          color="secondary"
          value="todos"
          onClick={setFilterAll}
        >
          Todos
        </Button>
        <Button
          variant={filter === "Asc" ? "contained" : "outlined"}
          color="secondary"
          value="Asc"
          onClick={handleFilter}
        >
          Asc
        </Button>
        <Button
          variant={filter === "Desc" ? "contained" : "outlined"}
          color="secondary"
          value="Desc"
          onClick={handleFilter}
        >
          Desc
        </Button>
        <Button
          variant={filter === "Jardín" ? "contained" : "outlined"}
          color="secondary"
          value="Jardín"
          onClick={handleFilter}
        >
          Jardín
        </Button>
        <Button
          variant={filter === "Tropical" ? "contained" : "outlined"}
          color="secondary"
          value="Tropical"
          onClick={handleFilter}
        >
          Tropical
        </Button>
        <Button
          variant={filter === "Interior" ? "contained" : "outlined"}
          color="secondary"
          value="Interior"
          onClick={handleFilter}
        >
          Interior
        </Button>
        <Button
          variant={filter === "Exterior" ? "contained" : "outlined"}
          color="secondary"
          value="Exterior"
          onClick={handleFilter}
        >
          Exterior
        </Button>
      </div>



      <div>
        <Box
          className="cardDiv"
          sx={{
            height: "350px",
            width: "1000px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={2}
            sx={{ justifyContent: "flex-start" }}
          >
            {filteredItems.map((item) => {
              return (
                <div key={item.id}>
                  <Card className="cardBody" elevation={2}>
                    <div className="titulo">
                      <CardHeader
                        action={<IconButton aria-label="settings"></IconButton>}
                        title={item.nombre}
                      />
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" isClick={isClick} onClick={()=>((setClick(!isClick) , addFav(item)))}  >
                          <FavoriteIcon />
                        </IconButton>
                      </CardActions>
                    </div>

                    <CardMedia sx={{ height: 280 }} image={item.url} />

                    <CardContent>
                      <Typography
                        className="price"
                        variant="body"
                        color="text.primary"
                      >
                        ${item.valor.toLocaleString("en")}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default Filter;
