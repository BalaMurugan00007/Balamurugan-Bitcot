const Details = ({ contact, closeForm }) => {
    if (!contact) return null;

    return (
        <div className="sideBox relative-box">
            <button type="button" className="close-btn" onClick={closeForm}>&times;</button>
            <h2 className="side-hd">Contact Details</h2>
            <div className="detail-txt">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Mobile:</strong> {contact.mobile}</p>
                <p><strong>Address:</strong> {contact.address}</p>
            </div>
        </div>
    );
}

export default Details;
