import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      
      <h2 className="profile-name">R2-D2</h2>
      <p className="profile-email">r2d2@rebellion.star</p>

      <div className="profile-description">
        <p>
          Astromech droide leal a la Alianza Rebelde. Experto en reparaciones
          de naves, hackeo de sistemas imperiales y proyección holográfica.
        </p>
      </div>

      <div className="profile-stats">
        <h3>Características</h3>
        <ul>
          <li>Modelo: R2 Series Astromech</li>
          <li>Altura: 96 cm</li>
          <li>Lenguaje: Binario (pitidos y silbidos)</li>
          <li>Afiliación: Rebel Alliance</li>
        </ul>
      </div>

      <div className="profile-abilities">
        <h3>Habilidades</h3>
        <ul>
          <li>⚡ Hackeo de sistemas</li>
          <li>🔧 Reparación de motores</li>
          <li>📡 Proyección holográfica</li>
          <li>🚀 Navegación estelar</li>
        </ul>
      </div>

      <div className="profile-status">
        <p className="status-online">Estado: Activo ✅</p>
      </div>
    </div>
  );
};

export default Profile;