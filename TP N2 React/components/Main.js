import React from 'react'

const Main = () => {
  return (
    <div>
      <section className="chosenTopic container" id="election">
            <div className="card">
                <h3>¿POR QUÉ ELEGIMOS ESTE PROYECTO?</h3>
                <p className="text">
                    El proyecto que hemos elegido es desarrollar un sistema
                    para la gestión de estacionamiento de vehículos.
                    Consideramos que se trata de una necesidad muy real en
                    la sociedad actual, ya que el aumento del parque
                    automotor ha generado un problema de espacio y de
                    congestión en las ciudades. Además, la implementación
                    de un sistema de este tipo podría tener múltiples
                    beneficios, tanto para los usuarios como para los
                    propietarios de los estacionamientos.
                </p>
            </div>
        </section>
        <section className="functions container" id="functionalities">
            <h2>FUNCIONALIDADES DEL SISTEMA</h2>
            <div className="container-functions">
                <div className="card">
                    <h3>GESTIÓN DE USUARIOS</h3>
                    <p className="text">
                        El sistema debe permitir registrar nuevos usuarios,
                        indicando nombre, apellido, dirección, etc.
                        Además, debe permitir registrar los lugares
                        disponibles, indicando el número de lugar, el tipo de vehículo que
                        puede estacionar en ese lugar y el precio por hora.
                    </p>
                </div>
                <div className="card">
                    <h3>REGISTRO DE INGRESOS</h3>
                    <p class="text">
                        El sistema debe permitir registrar los vehículos que
                        ingresan al estacionamiento, indicando la patente,
                        el tipo de vehículo. (auto, camioneta, camión, etc.)
                    </p>
                </div>
                <div className="card">
                    <h3>REGISTRO DE SALIDA</h3>
                    <p class="text">
                        El sistema debe permitir registrar la salida de los
                        vehículos, indicando la hora de salida.
                        Además, debe calcular el monto a cobrar, teniendo en
                        cuenta el tiempo de estacionamiento.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main
