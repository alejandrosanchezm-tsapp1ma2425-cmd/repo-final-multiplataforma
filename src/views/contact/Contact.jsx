import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    tarjeta: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.edad) {
      alert("Por favor rellena nombre, correo y edad para adoptar tu droide.");
      return;
    }

    alert(
      `¡Felicidades ${formData.nombre}! Ahora eres padrino de un droide que se encuentra en una galaxia muy, muy lejana...`
    );

    
    setFormData({
      nombre: "",
      correo: "",
      edad: "",
      tarjeta: ""
    });
  };

  return (
    <div className="contact-container">
      <h1>Adopta un Droide</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Número de tarjeta de crédito:
          <input
            type="text"
            name="tarjeta"
            value={formData.tarjeta}
            onChange={handleChange}
            placeholder="OBLIGATORIO!!!!!!!!!!!!!!!!"
          />
        </label>

        <button type="submit">Adoptar Droide</button>
      </form>
    </div>
  );
};

export default Contact;