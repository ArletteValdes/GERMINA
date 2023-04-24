import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const Filter = ({Plants}) => {
  const [filter, setFilter] = useState();

  // const filteredItems = filter ? Plants.filter((item) => item.tipo === filter) : items;

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <div className="filters">
        <Button
          variant={filter === "" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => setFilter("")}
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

      {/* <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            <p>{item.tipo}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Filter;
