import React from 'react'

const Footer = () => {
  return (
    <div class="footer">
      <section className="about us container" id="information">
                <div className="container-about-us">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos estudiantes de Ingenieria en Informática,
                        de la Universidad de Mendoza, cursando el tercer año
                        de la carrera. Este proyecto es parte de la materia
                        Programacion I, siendo proyecto final de la misma y
                        buscando adquirir conocimientos en backend y frontend.
                    </p>
                </div>
                <div className="container-link">
                    <table>
                        <tr>
                            <td><i class='bx bxl-github'></i></td>
                            <td><a href="https://github.com/santipaez" target="_blank">Santiago Paez</a></td>
                        </tr>
                        <tr>
                            <td><i class='bx bxl-github'></i></td>
                            <td><a href="https://github.com/Bloskix" target="_blank">Pablo Coello</a></td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="languages container" id="lan">
                <h2>LENGUAJES UTILIZADOS</h2>
                <div className="container-languages">
                    <table>
                        <tr>
                            <td><i class='bx bxl-html5'></i></td>
                            <td>El Lenguaje de Marcado de Hipertexto (HTML)
                                es el código que se utiliza para estructurar
                                y desplegar una página web y sus contenidos.</td>
                        </tr>
                        <tr>
                            <td><i class='bx bxl-css3'></i></td>
                            <td>Cascading Style Sheets (CSS) es un lenguaje
                                de hojas de estilo que se utiliza para describir
                                la presentación de un documento escrito en un
                                lenguaje como HTML.</td>
                        </tr>
                    </table>
                </div>
        </section>
    </div>
  )
}

export default Footer
