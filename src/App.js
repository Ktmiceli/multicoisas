import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { Icon } from '@iconify/react';

function App() {

  const [categorias, setCategorias] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    axios.get("https://sandboxmc.gateway.linkapi.com.br/v1/links")
    .then((response) => {
      setCategorias(response.data)
    })
    .catch(() => {
      console.log("nao deu")
    })

  }, []);

  const handleLeft = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth; 
  }

  const handleRight = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth; 
  }

  return (
    <div className='Container'>

      <section className='secTop'>
        <div className='Content'>

          <div className="divLogo">
            <img src='https://d8vlg9z1oftyc.cloudfront.net/multicoisashomolog/multicoisashomolog-file-manager/ICONS/logo-multicoisas-2x.png' alt='logo' />
          </div>

          <div className="divSearchBar">
            <span className='i'><Icon icon="bx:bx-search-alt" /></span>
            <input type='text' placeholder='O que você está procurando?' />
          </div>

          <div className="divUserBar">
            <ul>
              <li><span className='i'><Icon icon="bx:bx-user" /></span><span className='txt'>Minha Conta</span></li>
              <li><span className='i'><Icon icon="bx:bx-help-circle" /></span><span className='txt'>Ajuda</span></li>
              <li><span className='i'><Icon icon="bx:bx-cart" /></span><span className='txt'>Meu Carrinho</span></li>
            </ul>
          </div>
        
        </div>
      </section>
      <section className='secNav'>
      <div className='Content'>
        <ul>
          <li><span className='i'><Icon icon="bx:bx-menu" /></span><span>Todos os Departamentos</span></li>
          <li><span>Ofertas</span></li>
          <li><span>Lançamentos</span></li>
          <li><span>Mais Queridos</span></li>
          <li><span>Multilovers</span></li>
        </ul>
        
        <div>
          <div className='divLocal'>
            <span className='i'><Icon icon="bx:bx-store-alt" /></span>
            <span>Miguel Petroni - 255</span>
          </div>
          <div className='divLocalBtn'>
            <span className='i'><Icon icon="bx:bx-sync" /></span><span>Trocar</span>
          </div>
        </div>
          
          </div>
      </section>
      <section className='secBanner'>
      <div className='Content'>
          <div className='imageBanner'>

          {categorias.map((categoria, key={carousel}) => {
            if(categoria.groupid == 2)
            return(
            <img src={categoria.icon_image} alt='banner' />
            )
          })}
          </div>
          <div className='eCommerceBox'>
            <ul>
              <li><span className='i'><Icon icon="bx:bx-home" /></span><span className='txt'>Receba em casa</span></li>
              <li><span className='i'><Icon icon="bx:bx-store" /></span><span className='txt'>Retire na loja fisica</span></li>
              <li><span className='i'><Icon icon="bx:bx-support" /></span><span className='txt'>Suporte de venda</span></li>
              <li><span className='i'><Icon icon="bx:bx-credit-card" /></span><span className='txt'>Pagamento facilitado</span></li>
              <li><span className='i'><Icon icon="bx:bx-package" /></span><span className='txt'>Entrega em até 1 dia útil</span></li>
            </ul>
          </div>
        </div>
      </section>
      <p className='pTitle'>Navegue por departamento</p>
      <section className='secCarousel'>
      <div className='CarLeft' onClick={handleLeft}><span><Icon icon="bx:bx-left-arrow-alt" /></span></div>
      
      <div className='Content' ref={carousel}>

        {categorias.map((categoria, key={carousel}) => {
          if(categoria.groupid == 1)
          return(
            <a href={categoria.url}><div className='LinkCarousel' key={key}>
              <div className='LinkImg'>
                <img src={categoria.icon_image} alt='' />
              </div>

              <div className='LinkTxt'>
                <span>{categoria.name}</span>
              </div>
          </div></a>
          )
        })}
        
        </div>
        <div className='CarRight' onClick={handleRight}><span><Icon icon="bx:bx-right-arrow-alt" /></span></div>
      </section>

    </div>

  );
}

export default App;
