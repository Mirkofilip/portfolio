import React,{Component} from 'react';

class cards extends Component{
    render(){
    return (
        <a className='linkCard' href={this.props.url} target="_blank" rel="noreferrer" >
            {/* <div className='frameCard'>
                <img src={this.props.full} alt="" />
            </div> */}
            <div className="card overflow-hidden relative shadow-xl rounded-xl h-60 w-full max-w-ful bg-gradient-to-r from-purple-500 to-pink-500 text-center p-2.5">
                <picture className='absolute w-full h-full top-0 left-0 right-0'>
                    <img className="h-full w-full object-cover" src={this.props.immagine} alt="" />
                </picture>
            </div>
            <h3 className="text-base text-white">{this.props.nome}</h3>
        </a>
    );
}
}

export default cards;