import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useContexto } from "../Context/Contexto";
import Cards from "./Cards";

const Galeria = ({item}) => {
  const { fav, Plants } = useContexto();

  return (
    <>
      <div>
        <Box
          className="cardFav"
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
            {Plants.map((item) => (
              <Cards key={item.id} info={item} />
            ))}
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default Galeria;
