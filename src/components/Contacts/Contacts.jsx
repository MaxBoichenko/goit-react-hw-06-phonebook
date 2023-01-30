import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  //   const [contacts, setContacts] = useState(() =>   JSON.parse(localStorage.getItem('contacts')) || []);
  //   const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (!JSON.stringify(contacts)) {
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filteredContacts = contacts => {
    return contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
  };

  const handleStringChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <div>
        <p>Find contacts by name</p>
        <input type="text" onChange={handleStringChange} value={filter} />
      </div>
      <ul>
        {filteredContacts(contacts).map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span> {contact.number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Удалить контакт
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
