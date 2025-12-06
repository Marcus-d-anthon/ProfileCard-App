import ProfileCard from "./ProfileCard";

const ProfileList = ({ perfiles }) => {
  return (
    <div className="profile-list">
      {perfiles.map((perfil) => (
        <ProfileCard
          key={perfil.id}
          nombre={perfil.nombre}
          trabajo={perfil.trabajo}
          descripcion={perfil.descripcion}
        />
      ))}
    </div>
  );
}

export default ProfileList;