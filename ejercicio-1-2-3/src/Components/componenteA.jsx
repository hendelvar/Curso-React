import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Models/contacto.class';
import ComponenteB from './componenteB';


const ComponenteA = () => {
    return (
        <div>
            <h2>
                Nombre: { Contacto.nombre }
            </h2>
            <h3>
                Apellidos: { Contacto.apellido }
            </h3>
            <h3>
                Email: { Contacto.email }
            </h3>
            <ComponenteB estado={true}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;
