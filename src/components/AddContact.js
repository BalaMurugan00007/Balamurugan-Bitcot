import { useState } from "react";

function AddContact(props) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        address: ""
    });

    const add = (e) => {
        e.preventDefault();

        if (form.name === "" || form.mobile === "") {
            alert("Name and Mobile are mandatory!");
            return;
        }

        props.addNew(form);

        setForm({
            name: "",
            email: "",
            mobile: "",
            address: ""
        });
    };

    const resetForm = (e) => {
        e.preventDefault();

        setForm({
            name: "",
            email: "",
            mobile: "",
            address: ""
        });
    };

    return (
        <div className="sideBox relative-box">
            <button className="close-btn" onClick={props.closeForm}>X</button>

            <h2 className="side-hd">Add Contact</h2>

            <form className="add-form" onSubmit={add}>

                <label htmlFor="add-name">Name :</label><br />
                <input id="add-name" type="text" placeholder="Enter Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><br />

                <label htmlFor="add-email">Email :</label><br />
                <input id="add-email" type="text" placeholder="Enter Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br />

                <label htmlFor="add-mobile">Mobile :</label><br />
                <input id="add-mobile" type="text" placeholder="Enter Mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} /><br />

                <label htmlFor="add-address">Address :</label><br />
                <input id="add-address" type="text" placeholder="Enter Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /><br />

                <button type="submit" className="add-btn" style={{ marginLeft: "0px" }}>Add</button>
                <button type="button" className="add-btn" style={{ marginLeft: "70px" }} onClick={resetForm}>Reset</button>

            </form>
        </div>
    );
}

export default AddContact;