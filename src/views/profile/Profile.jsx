import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-pic"></div>
      <h2 className="profile-name">Nombre del Usuario</h2>
      <p className="profile-email">usuario@correo.com</p>
    </div>
  );
};

export default Profile;