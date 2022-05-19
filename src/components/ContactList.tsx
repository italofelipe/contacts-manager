import { Aside, Text } from "../styles/styles";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
  disabled: boolean;
}
const ContactList = ({ contacts, disabled, onSelect }: ContactListProps) => {
  return (
    <>
      <Aside disabled={disabled}>
        <Text align="left" size="md" variant="text">
          Contacts
        </Text>
        <ul>
          {contacts.map((contact, index) => (
            <ContactCard
              imageUrl={contact.imageUrl}
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
