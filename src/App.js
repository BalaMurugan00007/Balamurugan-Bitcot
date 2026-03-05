import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ListBox from './components/ListBox';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import Details from './components/Details';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [viewContact, setViewContact] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json")
      .then(res => res.json())
      .then(data => setDataList(data))
      .catch(err => console.log(err));
  }, []);

  const toggleUpdate = () => {
    setShowUpdate(!showUpdate);
  }

  const toggleAdd = () => {
    setShowAdd(!showAdd);
    setShowUpdate(false);
    setShowDetails(false);
  }

  const triggerEdit = (contact) => {
    setEditContact(contact);
    setShowUpdate(true);
    setShowAdd(false);
    setShowDetails(false);
  }

  const triggerView = (contact) => {
    setViewContact(contact);
    setShowDetails(true);
    setShowUpdate(false);
    setShowAdd(false);
  }

  const addNew = (contactData) => {
    contactData.id = Date.now();
    setDataList([...dataList, contactData]);
    setShowAdd(false);
  }

  const updateContactData = (updatedContact) => {
    let freshList = dataList.map((item) => {
      return item.id === updatedContact.id ? updatedContact : item;
    });
    setDataList(freshList);
    setShowUpdate(false);
  }

  const closeForm = () => {
    setShowAdd(false);
    setShowUpdate(false);
    setShowDetails(false);
  }

  
  const filteredList = dataList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.mobile.includes(searchQuery)
  );

  return (
    <div className="main-app-wrap">
      <div className={`contactBox ${showAdd || showUpdate || showDetails ? 'blur-bg' : ''}`}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ListBox
          dataList={filteredList}
          setDataList={setDataList}
          toggleAdd={toggleAdd}
          triggerEdit={triggerEdit}
          triggerView={triggerView}
        />
      </div>

      {showAdd && <AddContact addNew={addNew} closeForm={closeForm} />}
      {showUpdate && <UpdateContact contact={editContact} updateContactData={updateContactData} closeForm={closeForm} />}
      {showDetails && <Details contact={viewContact} closeForm={closeForm} />}
    </div>
  );
}

export default App;
