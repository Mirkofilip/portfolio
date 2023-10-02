import Cards from './components/cards';
import React, { Component } from 'react';
import { gsap } from "gsap";


class App extends Component {
  componentDidMount() {
    gsap.to(".bar", {
      delay: 0,
      height: 0,
      duration: 1.5,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });


  }

  state = {
   projects: [
      {id:0,nome:'spazio geco',immagine:require('./image/spaziogeco.it_.webp'),url:'https://spaziogeco.it/',full:require('./image/spaziogeco.it_full.webp')},
      {id:1,nome:'break free beer',immagine:require('./image/www.breakfreebeer.com.webp'),url:'https://www.breakfreebeer.com/',full:''},
      {id:2,nome:'provinco italia',immagine:require('./image/www.provincoitalia.it.webp'),url:'https://www.provincoitalia.it/',full:require('./image/www.provincoitalia.it_full.webp')},
      {id:14,nome:'baldinini blog',immagine:require('./image/shoesmyway.baldinini-shop.com_blog.webp'),url:'https://shoesmyway.baldinini-shop.com/blog',full:''},
      {id:13,nome:'vis progettazione',immagine:require('./image/vising.it_.webp'),url:'https://vising.it/',full:require('./image/vising.it_full.webp')},
      {id:8,nome:'mectir',immagine:require('./image/mectir.it_.webp'),url:'https://monkeylab.it/',full:''},
      {id:3,nome:'marcosh',immagine:require('./image/www.marcosh.net.webp'),url:'https://www.marcosh.net/',full:''},
      {id:5,nome:'sellaronda wine',immagine:require('./image/www.sellarondawine.com_.webp'),url:'https://www.sellarondawine.com/',full:''},
      {id:6,nome:'mister magic',immagine:require('./image/www.mistermagic.it_.webp'),url:'https://www.mistermagic.it/',full:''},
      {id:7,nome:'palazzo viti',immagine:require('./image/palazzoviti.it_.webp'),url:'https://palazzoviti.it/',full:''},
      {id:9,nome:'nutribox',immagine:require('./image/nutribox.store_.webp'),url:'https://nutribox.store/',full:''},
      {id:10,nome:'museo navale carmagnola',immagine:require('./image/www.museonavalecarmagnola.it_.webp'),url:'https://www.museonavalecarmagnola.it/',full:''},
      {id:11,nome:'steven sporting',immagine:require('./image/www.stevensportingclub.it_.webp'),url:'https://www.stevensportingclub.it/',full:''},
      {id:4,nome:'ronco di sassi',immagine:require('./image/www.roncodisassi.it_.webp'),url:'https://www.roncodisassi.it/',full:''},
      {id:12,nome:'polipodio',immagine:require('./image/polipodio.com_.webp'),url:'https://polipodio.com/',full:''},
      {id:15,nome:'bolton group',immagine:require('./image/www.boltongroup.net_it_.webp'),url:'https://www.boltongroup.net/',full:''},
      {id:16,nome:'mvsa experience',immagine:require('./image/mvsaexperience.it_.webp'),url:'https://mvsaexperience.it/',full:''},
      {id:17,nome:'more..',immagine:'https://placekitten.com/1200/1200',url:'https://cat-bounce.com/',full:''} 
  ]
};

  render() {
  return (
    <main className="font-poppins p-5">
      <div className="container mx-auto">
        <h1 className="title text-center text-black text-6xl pt-10 uppercase">Mirko Filippelli</h1>
        <h2 className="subtitle text-center text-2xl mb-10 pt-10 uppercase">Portfolio</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 container mx-auto pb-9" >
        {this.state.projects.map(project =>(
          <Cards
            key={project.id}
            nome={project.nome}
            immagine={project.immagine}
            full={project.full}
            url={project.url} />
        ))}
        </div>
        <h4>
          Disclaimer*
        </h4>
        <p className="text-blck mb-10 text-justify">*Il lavoro pubblicato su questo sito web è protetto da copyright e non può essere utilizzato senza il permesso di tutte le aziende coinvolte. Il lavoro è stato realizzato per conto di Agenzie esterne e può contenere informazioni riservate. Non è consentito condividere o utilizzare queste informazioni senza il permesso di tutte le aziende coinvolte.</p>
        <p className="text-blck mb-10 text-justify">*Tutti i lavori pubblicati sul sito web sono puramente dimostrativi e hanno il solo scopo di mostrare come sviluppo il codice.<br />*Il lavoro intellettuale non è di mia proprietà e appartiene alle Agenzie esterne a cui appartiene il progetto completo.</p>
      </div>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </main>
  );
}
}

export default App;
