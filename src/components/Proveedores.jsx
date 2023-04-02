import Button from "@mui/material/Button";

const Proveedores = () => {
  return (
    <>
      <aside className="infoSection">
        <div className="proveedores">
          <div className="provTitulo">PROVEEDORES</div>

          <Button variant="contained" color="primary" state="focused">
            HouseCenter
          </Button>
          <Button variant="contained" color="primary" state="focused">
            CasaJardín
          </Button>
          <Button variant="contained" color="primary" state="focused">
            Vivero
          </Button>
          <Button variant="contained" color="primary" state="focused">
            ViveroVivo
          </Button>
          <Button variant="contained" color="primary" state="focused">
            ViveroFlor
          </Button>
          <Button variant="contained" color="primary" state="focused">
            Florencia
          </Button>
        </div>

        <article className="tips">
          <div className="tipsTitulo">TIPS</div>
          <h2>Repelentes Caseros</h2>
          <p className="texto">
            Los bichitos suelen causar estragos y muchas veces ni nos enteramos.
            "Los insectos que nunca faltan en una planta son los áfidos, más
            conocidos como pulgones, cochinillas y mosca blancas", comenta
            Carlos Rebolleda, jefe de la sección de plantas en Fronda Centros de
            Jardinería. 
          </p>
        </article>
      </aside>
    </>
  );
};

export default Proveedores;
