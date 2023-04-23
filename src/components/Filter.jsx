import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";




const Filter = () => {


  const [filter, setFilter] = useState('');

  // const filteredItems = filter ? items.filter(item => item.type === filter) : items;

  const handleFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
    <div className="filters">

      <Button variant={filter === '' ? 'contained' : 'outlined'} color="secondary" onClick={() => setFilter('')} >
        Todos
      </Button>
      <Button variant={filter === 'Asc' ? 'contained' : 'outlined'}  value="Asc" color="secondary" onClick={handleFilter}>
        Asc
      </Button>
      <Button variant={filter === 'Desc' ? 'contained' : 'outlined'} value="Desc" color="secondary" onClick={handleFilter}>
        Desc
      </Button>
      <Button variant={filter === 'Jardín' ? 'contained' : 'outlined'} value="Jardín" color="secondary" onClick={handleFilter}>
        Jardín
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleFilter}>
        Tropical
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleFilter}>
        Interior
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleFilter}>
        Exterior
      </Button>
    </div>

    {/* <div>
      {filteredItems.map(item=>(
   <div></div>
      ))}
    </div> */}
    </>
  );
};

export default Filter;
