
import './App.css'
import imagenprincipar from '../src/static/programacion.png'
import watsapp from '../src/static/whatsapp.png'
import likedin from  '../src/static/linkedin.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




function App() {
   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4jszte', 'template_2p73r6k', form.current, 'byoE89pVag4oxUzge')
      .then((result) => {
          console.log(result.text);
          alert("email enviado");
      }, (error) => {
        console.log(error.text);
        alert("el email no pudo ser entregado")
      });
  };
  

  return (
    <>
        <body className="fondo">
       <header>
          <div className="logo">SANTIAGO INSAURRALDE</div>
          <div className='izqui'>
           <nav>
             <ul>
               <li><a href="/">inicio</a></li>
               <li><a href="#contacto">contacto</a></li>
             </ul>
            </nav>
          </div>
       </header>
       <section>
        <div className="hero">
          <div className="hero-content">
            <div className="left">
              <h1>Soy desarrollador</h1>
              
              <p>Contruyo aplicaciones en python,flask,html,css ,utilizando bases de datos relacionales</p>
              <a href="#contacto" class="btn">contactame</a>
            </div>
            <div className="right">
             <img src = { imagenprincipar }  width="500px"/> 
            </div>
          </div>
         </div>
        </section>
        <div className="center"> 
          <div className="content">
          
            <div className="row verti">
              <div className="left padded" >
                <h2>Desarrollo aplicaciones con pasión y sitios web con muchas ganas de aprender nuevas habilidades y tecnologías. </h2>
                <li>Contantemente me encuentro aprendiendo y desarrollando aplicaciones por placer, esta web la construí desde cero con React y tambien costrui el mismo portafolio con python y flask ,quiero conocer aún mas este mundo. </li>
                <li>Tambien a su vez tengo conocimiento en mysql, tkinter, javascript y uso la libreria React</li>
              </div>
              <div className="right padded">
                <h1>Podemos conversar y conocernos</h1>
                <p>Solo enviame un correo <a class='orange'href="#contacto">hablamos?</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="center padded">
          <div className="content padded">
            <div className="padded">
              <h1>Esto son los proyecto que construí:</h1>
            </div>
            <div className="row">
              <div className="card third">
                <h3>App clima</h3>
                <p>Una aplicacion que te dice el clima usando una API de weather</p>
                <a className="orange" target="_blank" href="https://practica-de-clima-react.netlify.app/">link aqui</a>
             </div>
             <div className="row">
                <div className="card third">
                <h3>Gestor de clientes</h3>
                <p>Una aplicacion para gestionar mis clientes</p>
                <a className="orange" href="gestor.exe" download> {' '}link aqui</a>
              </div>
              <div className="row">
                <div className="card third">
                  <h3>Gestor de tareas</h3>
                  <p>Una aplicacion para gestionar mis tareas</p>
                  <a className="orange" href="tareas.exe" download>{' '} link aqui</a>
                </div>
              </div>
           </div>
         </div>
       </div>
       </div>
         <div className="center padded">
          <div className="row vert-pad">
             <div className="left padded"> 
               <h1>Trabajamos juntos!!</h1>
               <p>Dare mi mejor esfuerzo para aprender y mejorar, aportar valor y respeto para que tengamos una exelente relacion</p>
             </div>
         <div id="contacto" className="email">
              <form ref={form} onSubmit={sendEmail}>
              <div className="contact-form">
                    <input type="text" name="user_name"  placeholder="nombre" required/> 
                    <input type="email" name="user_email" placeholder="email"required/> 
                    <textarea name="message"  placeholder="mensaje"required/>
                       <div className="contact-form">
                           <div className='btnna'>
                             <input className="enviar" type="submit" value="enviar email" />
                           </div>
                        </div>
                  </div>
              </form>
             </div>
           </div>
         </div>
         
       
          
        
       
    
          <div class="fut">
            <div class="medio">
              <h3>MIS REDES SOCIALES</h3>
              <a target="_blank" href="http://www.linkedin.com/in/santiago-insaurralde-9baa60226"><img class="social"width="30" src={ likedin }/></a>
              <a target="_blank" href="https://wa.link/41y5ca"><img class="social" width="30" src={watsapp} /> </a>
          </div>
        </div>
     
         <div class="made-with">
           <div class="row">
             <p>Echo con ❤️ por Santiago Insaurralde</p>
           </div>
         </div>

     
      </body>
    
    </>

   )
 
  
}
         
      
  



export default App
