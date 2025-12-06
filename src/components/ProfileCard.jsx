const ProfileCard = ({ nombre, trabajo, descripcion }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <h3>{trabajo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default ProfileCard;