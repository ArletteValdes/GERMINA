import * as React from "react";
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


export default function Cards({Plants}) {

  return (
    <Box
      className="cardDiv"
      sx={{
        height: "350px",
        width: "1000px",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Stack direction="row"  flexWrap="wrap" gap={2} sx={{ justifyContent:"space-between" }}  >
        {Plants.map((item) => {
          return (
            <div key={item.id}>
              <Card className="cardBody" elevation={2} >
                <div className="titulo">
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title={item.nombre}
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
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
  );
}
