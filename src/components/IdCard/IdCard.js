
function IdCard(props) {
    return (
        <div className="id-card">
            <img className="id-card-picture" src={props.picture} alt="Profile" />
            <div className="id-card-info">
                <ul>
                    <li><b>First Name:</b> {props.firstName}</li>
                    <li><b>Last Name:</b> {props.lastName}</li>
                    <li><b>Gender:</b> {props.gender}</li>
                    <li><b>Height:</b> {props.height / 100} m</li>
                    <li><b>Birth:</b> {props.birth.toDateString()}</li>
                </ul>
            </div>
        </div>
    );
}

export default IdCard;