import { useState } from 'react';
import './Main.css'

function Mainhome() {
    const [valorSeleccionado, setValor] = useState('');
    const handleChange = (event) => {
      setValor(event.target.value);
    };
    return (
      <>
        <main className='ContainerM'>
            <div className='form-container'>
              <h2>Formulario</h2>
              <p>
                Este formulario tiene como objetivo recopilar información relacionada con el conocimiento, las prácticas y las percepciones sobre la lactancia materna. A través de preguntas simples y directas.
                La información recolectada servirá para comprender mejor las necesidades de orientación y apoyo en torno a la lactancia, con el fin de promover hábitos saludables, resolver inquietudes y fortalecer la educación en este tema tan importante para la salud infantil y materna.
              </p>
              <form id="survey-form">
                {/* Nombre y Email */}
                <div className="Name">
                  <div className="Campo">
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre y apellido"  required />
                  </div>
                  <div className="Campo">
                    <label htmlFor="email">Email (opcional)</label>
                    <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" />
                  </div>
                </div>

                {/* Edad, rol y ciudad */}
                <div className="PersonalInfo">
                  <div className="Campo">
                    <label htmlFor="age_range">Rango de edad</label>
                    <select id="age_range" name="age_range" className='Info' onChange={handleChange} value={valorSeleccionado} required>
                      <option>Selecciona tu rango de edad</option>
                      <option>&lt;18</option>
                      <option>18-26</option>
                      <option>27-59</option>
                      <option>60+</option>
                    </select>
                  </div>

                  <div className="PersonalInfo">
                    <div className="Campo">
                      <label htmlFor="role">Tu rol</label>
                      <select id="role" name="role" className='Info' required>
                        <option>Selecciona tu rol</option>
                        <option>Madre</option>
                        <option>Padre/Cuidador</option>
                        <option>Profesional de salud</option>
                        <option>Estudiante</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="PersonalInfo">
                    <div className="Campo">
                      <label htmlFor="city">Ciudad (opcional)</label>
                      <input type="text" id="city" name="city" placeholder="Ciudad" maxLength="100" />
                    </div>
                  </div>
                </div>

                {/* Nivel de conocimiento */}
                <div className="Campo">
                  <label htmlFor="knowledge_level">
                    ¿Cuánto sabes sobre lactancia? <span id="range-val">3</span>/5
                  </label>
                  <input type="range" id="knowledge_level" name="knowledge_level" min="1" max="5" value="3" />
                  <div className="hint">1 = nada, 5 = experto/a</div>
                </div>

                {/* Ejemplo de pregunta tipo radio */}
                <fieldset className="fieldset">
                  <legend>¿Qué es lactancia materna exclusiva?</legend>
                  <label className="option">
                    <input type="radio" name="q_exclusive" value="Solo leche materna..." required />
                    Solo leche materna, sin otros líquidos ni sólidos (excepto medicinas/vitaminas).
                  </label>
                  <label className="option">
                    <input type="radio" name="q_exclusive" value="Leche materna + agua/jugos" />
                    Leche materna + agua/jugos.
                  </label>
                  <label className="option">
                    <input type="radio" name="q_exclusive" value="Leche materna + fórmula" />
                    Leche materna + fórmula.
                  </label>
                </fieldset>

                {/* Consentimiento */}
                <div className="consent">
                  <label className="option">
                    <input type="checkbox" id="consent" name="consent" required />
                    Acepto el uso de mis respuestas con fines educativos. (Habeas Data)
                  </label>
                </div>

                {/* Botón */}
                <div className="actions">
                  <button id="submit-btn" className="btn" type="submit">Enviar</button>
                  <span id="status" className="status"></span>
                </div>
              </form>
            </div>
        </main>
      </>
    )
  }

  export default Mainhome