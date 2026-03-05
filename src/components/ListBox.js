const ListBox = ({ dataList, setDataList, toggleAdd, triggerEdit, triggerView }) => {
    const delClick = (id) => {
        let freshList = dataList.filter((item) => item.id !== id);
        setDataList(freshList);
    }

    const editClick = (contact) => {
        triggerEdit(contact);
    }

    const viewClick = (contact) => {
        triggerView(contact);
    }

    const addClick = () => {
        toggleAdd();
    }

    return (
        <div>
            <div className="list-box">
                {
                    dataList.map((val, idx) => {
                        return (
                            <div className="cnt-item" key={idx}>
                                <div className="cnt-details">
                                    <div className="cnt-name">{val.name}</div>
                                    <div className="cnt-num">{val.mobile}</div>
                                </div>
                                <div className="btn-box">
                                    <button className="edit-btn" style={{ backgroundColor: "lightblue", color: "black", verticalAlign: "middle" }} onClick={() => viewClick(val)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                    <button className="edit-btn" onClick={() => editClick(val)}>Edit</button>
                                    <button className="del-btn" onClick={() => delClick(val.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="add-wrap">
                <button className="add-btn" onClick={addClick}>+ Add Contact</button>
            </div>
        </div>
    );
};

export default ListBox;
