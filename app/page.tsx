"use client";

import { useEffect, useRef, useState } from "react";

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const rituals = [
  { n:"01", name:"Pilates", sub:"Reformer · Mat · Privado", time:"50 min", image:asset("/images/pilates-reformer.png"), text:"Movimiento consciente en grupos íntimos. Fuerza, alineación y una respiración que ordena." },
  { n:"02", name:"Masajes", sub:"Relajante · Profundo · Facial", time:"60—90 min", image:asset("/images/masajes.png"), text:"Tratamientos personalizados que escuchan al cuerpo y liberan lo que ya no necesita sostener." },
  { n:"03", name:"Pausa", sub:"Té · Jardín · Silencio", time:"Sin reloj", image:asset("/images/salon-te.png"), text:"Un salón abierto al jardín para llegar antes, quedarse después y permitir que el bienestar continúe." },
];
const days = [
  {d:"LUN",date:"27",items:["08:00 Pilates Reformer","10:00 Masaje profundo","18:30 Pilates Mat"]},
  {d:"MAR",date:"28",items:["09:00 Pilates Reformer","12:00 Masaje facial","19:00 Movilidad"]},
  {d:"MIÉ",date:"29",items:["08:30 Pilates Mat","11:00 Masaje relajante","18:00 Pilates Reformer"]},
  {d:"JUE",date:"30",items:["09:00 Pilates Reformer","13:00 Masaje profundo","19:30 Respiración"]},
];

export default function Home(){
  const [ritual,setRitual]=useState(0); const [day,setDay]=useState(0); const [menu,setMenu]=useState(false);
  const hero=useRef<HTMLElement>(null);
  useEffect(()=>{const move=(e:PointerEvent)=>hero.current?.style.setProperty("--x",`${(e.clientX/innerWidth-.5)*18}px`);addEventListener("pointermove",move);return()=>removeEventListener("pointermove",move)},[]);
  return <main>
    <div className="grain"/>
    <header>
      <a className="brand" href="#inicio"><i>CO</i><span>CASA<br/>ORIENTE</span></a>
      <nav><a href="#casa">La casa</a><a href="#rituales">Rituales</a><a href="#agenda">Agenda</a></nav>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?"Cerrar":"Menú"}<i/></button>
    </header>
    {menu&&<div className="drawer"><small>UN REFUGIO URBANO · BUENOS AIRES</small>{["La casa","Rituales","Agenda","Visitanos"].map((x,i)=><a key={x} onClick={()=>setMenu(false)} href={`#${x.toLowerCase().replace(" ","-")}`}><sup>0{i+1}</sup>{x}<span>↗</span></a>)}</div>}
    <section className="hero" id="inicio" ref={hero}>
      <img src={asset("/images/patio-casa-oriente.png")} alt="Patio interno de Casa Oriente"/>
      <div className="shade"/><div className="hero-lines"/>
      <div className="hero-top"><span>34°35′S · 58°23′O</span><span>BIENESTAR EN LA CIUDAD</span></div>
      <h1><span>Volver</span><em>a vos.</em></h1>
      <p>Una casona, un jardín y el tiempo necesario para moverte, soltar y respirar.</p>
      <a className="book" href="#agenda"><span>Reservar<br/>una experiencia</span><b>↘</b></a>
      <div className="scroll">DESCUBRIR <i/> 01</div>
    </section>

    <section className="welcome" id="casa">
      <span className="eyebrow">[ CASA ORIENTE ]</span>
      <h2>En medio del ruido,<br/>una casa que invita<br/><em>a bajar el ritmo.</em></h2>
      <div className="welcome-foot"><p>Recuperamos una casona porteña alrededor de su jardín interno. Cada sala se abre a la luz, al agua y al verde para que el bienestar empiece antes de cada práctica.</p><span>PALERMO · BUENOS AIRES</span></div>
    </section>

    <section className="rituals" id="rituales">
      <div className="ritual-head"><span className="eyebrow">[ EXPERIENCIAS ]</span><h2>Elegí cómo<br/><em>querés sentirte.</em></h2></div>
      <div className="ritual-stage">
        <div className="ritual-photo" key={rituals[ritual].name}><img src={rituals[ritual].image} alt={rituals[ritual].name}/><span>{rituals[ritual].time}</span></div>
        <div className="ritual-copy"><small>{rituals[ritual].sub}</small><h3>{rituals[ritual].name}</h3><p>{rituals[ritual].text}</p><a href="#agenda">Ver disponibilidad <b>↗</b></a></div>
      </div>
      <div className="ritual-tabs">{rituals.map((r,i)=><button className={i===ritual?"active":""} onClick={()=>setRitual(i)} key={r.name}><span>{r.n}</span><b>{r.name}</b><small>{r.sub}</small></button>)}</div>
    </section>

    <section className="breath">
      <div className="breath-orb"><i/><span>INHALÁ<br/><b>4</b><br/>EXHALÁ</span></div>
      <div className="breath-copy"><span className="eyebrow">[ UNA PAUSA ]</span><h2>Antes de seguir,<br/><em>respirá.</em></h2><p>La respiración es el umbral de la casa. Quedate un momento. No hay nada que apurar.</p></div>
    </section>

    <section className="garden">
      <img src={asset("/images/salon-te.png")} alt="Salón de té abierto al jardín"/>
      <div className="garden-card"><span className="eyebrow">[ EL JARDÍN ADENTRO ]</span><h2>Tu experiencia<br/>no termina<br/><em>cuando termina.</em></h2><p>Después de cada sesión, el salón y el jardín te esperan con una infusión de estación. Llegar, practicar y volver al mundo de a poco.</p></div>
    </section>

    <section className="philosophy">
      <span className="eyebrow">[ NUESTRO ORIENTE ]</span>
      <div><p>Menos exigencia.</p><p>Más presencia.</p><p><em>Movimiento que cuida.</em></p></div>
      <aside>No creemos en fórmulas idénticas. Cada cuerpo trae una historia; cada experiencia empieza por escucharla.</aside>
    </section>

    <section className="agenda" id="agenda">
      <div className="agenda-title"><span className="eyebrow">[ ESTA SEMANA ]</span><h2>Encontrá<br/><em>tu momento.</em></h2><p>Elegí un día para explorar horarios disponibles.</p></div>
      <div className="calendar">
        <div className="days">{days.map((x,i)=><button onClick={()=>setDay(i)} className={i===day?"active":""} key={x.d}><span>{x.d}</span><b>{x.date}</b></button>)}</div>
        <div className="slots">{days[day].items.map((x,i)=>{const [time,...name]=x.split(" ");return <a href="mailto:hola@casaoriente.com" key={x}><span>{time}</span><b>{name.join(" ")}</b><small>{i===1?"1 lugar":"Disponible"}</small><i>↗</i></a>})}</div>
      </div>
    </section>

    <section className="visit" id="visitanos">
      <img src={asset("/images/patio-casa-oriente.png")} alt="Jardín de Casa Oriente"/>
      <div className="visit-shade"/><span className="eyebrow">[ VENÍ A CASA ]</span><h2>Hay un lugar<br/><em>esperándote.</em></h2><a href="mailto:hola@casaoriente.com">hola@casaoriente.com <span>↗</span></a>
      <div className="visit-meta"><p>Palermo<br/>Buenos Aires</p><p>Lun—Sáb<br/>08:00—20:00</p><p>Instagram<br/>WhatsApp</p></div>
    </section>
    <footer><a className="brand" href="#inicio"><i>CO</i><span>CASA<br/>ORIENTE</span></a><span>© 2026 · VOLVER A VOS</span><a href="#inicio">ARRIBA ↑</a></footer>
  </main>
}
