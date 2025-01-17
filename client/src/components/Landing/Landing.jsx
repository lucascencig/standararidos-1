import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../img/standarLogo.jpg';
import bannerUno from '../../img/bannerUno.jpg';
import bannerDos from '../../img/bannerDos.jpg';
import bannerTres from '../../img/bannerTres.jpg';
import Productos from '../Productos/Productos';
import { getProducto } from '../../Redux/actions/actions';
import NavMenu from '../NavMenu/Menu';
import Footer from '../Footer/Footer';
import s from '../Landing/Landing.module.css';


export default function Landing() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const dispatch = useDispatch();


  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  useEffect(() => {

    dispatch(getProducto());

  }, [dispatch]);

  // const sortProducts = allProductos.sort((a, b) =>
  //   a.id - b.id
  // )


  return (
    <div>
      {loading ?
        (<div className={s.loader}>
          <div className={s.first}>
            <div className={s.second}>
              <div className={s.third}>
              </div>
            </div>
          </div>
        </div>) : (
          <div className={s.contenedorLanding}>

            <div className={s.textoArriba}>
              <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
              <p>Copyright · 2022 · Standar Aridos</p>
            </div>

            <div className={s.menu}>

              <div className={s.contenedorLogo}>
                <img src={logo} alt="" />
              </div>


              <div className={s.menu_landing}>
                <NavMenu />
              </div>
            </div>

            {/* <div className={s.titulo}>
        <h1>Standar Aridos</h1>
      </div> */}


            <div className={s.carouselImg}>
              <ul>
                <li><img src={bannerUno} alt="" /></li>
                <li><img src={bannerDos} alt="" /></li>
                <li><img src={bannerTres} alt="" /></li>
              </ul>
            </div>

            {/* <div className={s.textocambiante}>
        <h3 className={s.renova}>¡renová</h3>
        <ul>
          <li>tus Espacios!</li>
          <li>tu Hogar!</li>
          <li>tu Vida!</li>
        </ul>
      </div> */}

            <h3 className={s.title_destacados}>Productos Destacados</h3>
            <p className={s.aclaracion}>Clickea sobre el producto para ver el detalle</p>
            <div className={s.contenedorProductos}>
              {allProductos?.reverse().slice(0, 6).map(e => {

                return (
                  <div key={e.id}>
                    <Productos
                      id={e.id}
                      imagen={e.imagen}
                      nombre={e.nombre}
                      descripcion={e.descripcion}
                      categoria={e.categoria}
                      seccion={e.seccion}
                    />
                  </div>
                );

              })}
            </div>

            <Footer />
          </div>
        )}
    </div>
  );
}
