import * as React from "react";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useContexto } from "../Context/Contexto";
import Cards from "./Cards";




const Filter = (item) => {

  const { Plants } = useContexto();



  const [filter, setFilter] = useState("todos");

 

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const setFilterAll = (event) => {
    setFilter(event.currentTarget.value);
  };

  const filteredItems = Plants.filter(
    (item) => item.tipo === filter || filter === "todos"
  );

 


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




            {filteredItems.map((item) => {

console.log(filteredItems),
              <Cards key={item.id} item={item.tipo} filteredItems={filteredItems}/>;
            })}
  


    </>

    
  );
};

export default Filter;
