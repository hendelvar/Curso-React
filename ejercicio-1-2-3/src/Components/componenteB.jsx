import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = (estado) => {

    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h3>
                {conectado === false ? 'Contacto No Disponible':'Contacto En Linea'}
            </h3>
            <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado':'Desconectado'}
                
            </button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool
};


export default ComponenteB;

