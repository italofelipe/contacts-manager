import { Aside, Text } from "../styles/styles";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}
const ContactList = ({ contacts, onSelect }: ContactListProps) => {
  return (
    <>
      <Aside>
        <Text align="left" size="md" variant="text">
          Contacts
        </Text>
        <ul>
          {contacts.map((contact, index) => (
            <ContactCard
              email={contact.email}
              name={contact.name}
              phone={contact.phone}
              onSelect={() => onSelect(contact)}
              key={contact.phone}
            />
          ))}
        </ul>
      </Aside>
    </>
  );
};

export default ContactList;
