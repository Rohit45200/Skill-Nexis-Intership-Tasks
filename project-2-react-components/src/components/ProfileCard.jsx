
function ProfileCard({ name, role, description }) {
    return (
        <div className="profile-card">
            <div className="avatar">
                {name.charAt(0)}
            </div>

            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
