import React, { useState } from "react";

function UpdateContact(props) {

    const [form, setForm] = useState({
        id: props.contact?.id || "",
        name: props.contact?.name || "",
        email: props.contact?.email || "",
        mobile: props.contact?.mobile || "",
        address: props.contact?.address || ""
    });

    const update = (e) => {
        e.preventDefault();
        props.updateContactData(form);
    };

    const resetForm = (e) => {
        e.preventDefault();

        const contact = props.contact || {};

        setForm({
            id: contact.id || "",
            name: contact.name || "",
            email: contact.email || "",
            mobile: contact.mobile || "",
            address: contact.address || ""
        });
    };

    return (
        <div className="sideBox relative-box">
            <button className="close-btn" onClick={props.closeForm}>X</button>

            <h2 className="side-hd">Update Contact</h2>

            <form className="add-form" onSubmit={update}>

                <label htmlFor="update-name">Name :</label><br />
                <input id="update-name" type="text" placeholder="Enter Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><br />

                <label htmlFor="update-email">Email :</label><br />
                <input id="update-email" type="text" placeholder="Enter Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br />

                <label htmlFor="update-mobile">Mobile :</label><br />
                <input id="update-mobile" type="text" placeholder="Enter Mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} /><br />

                <label htmlFor="update-address">Address :</label><br />
                <input id="update-address" type="text" placeholder="Enter Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /><br />

                <button type="submit" className="add-btn">Update</button>
                <button type="button" className="add-btn" style={{ marginLeft: "65px" }} onClick={resetForm}>Reset</button>

            </form>
        </div>
    );
}

export default UpdateContact;