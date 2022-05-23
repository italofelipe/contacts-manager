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
      <Aside disabled={disabled} className={disabled ? "disabled" : ""}>
        <Text align="left" size="md" variant="text">
          Contacts
        </Text>
        <ul>
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactCard
                imageUrl={contact.imageUrl}
                email={contact.email}
                name={contact.name}
                phone={contact.phone}
                onSelect={() => onSelect(contact)}
                key={contact.phone}
              />
            ))
          ) : (
            <Text align="left" size="md" variant="info">
              No contacts yet. Insert one.
            </Text>
          )}
        </ul>
      </Aside>
    </>
  );
};

export default ContactList;
