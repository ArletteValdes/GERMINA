import * as React from 'react';
import Button from '@mui/material/Button';


const Filter = () => {
  return (

    
    <div className="filters">
 <Button variant="contained" color="secondary"  >Todos</Button>
      <Button variant="outlined" color="secondary"  >Asc</Button>
      <Button variant="outlined" color="secondary" >Desc</Button>
      <Button variant="outlined" color="secondary" >Jardín</Button>
      <Button variant="outlined" color="secondary" >Tropical</Button>
      <Button variant="outlined" color="secondary" >Interior</Button>
      <Button variant="outlined" color="secondary" >Exterior</Button>
   
    </div>


  );
};

export default Filter;
