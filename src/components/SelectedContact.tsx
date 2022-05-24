import { faClose, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import {
  ContactCard,
  ContactCardInnerContent,
  ContactCardLower,
  ContactCardUpper,
  RoundedButton,
  Text
} from "../styles/styles";
import CreateContact from "./CreateContact";

type SelectedContactsProps = {
  onDelete: () => void;
  onClose: () => void;
  selectedContact: Contact;
  onCreate: Function;
};
const SelectedContact = ({
  onClose,
  onCreate,
  onDelete,
  selectedContact,
}: SelectedContactsProps) => {
  const [update, setUpdate] = useState(false);
  const [updatedValues, setUpdatedValues] = useState<Contact | null>(null);
  useEffect(() => {}, [updatedValues]);

  const updatedValuesMemo = useMemo(() => {
    if (updatedValues && !update) {
      return (
        <>
          <Text size="lg" align="center" variant="text">
            {updatedValues.name}
          </Text>
          <Text size="lg" align="center" variant="info">
            {updatedValues.phone}
          </Text>
          <Text size="lg" align="center" variant="info">
            {updatedValues.email}
          </Text>
        </>
      );
    } else if (!update && !updatedValues) {
      return (
        <>
          <Text size="lg" align="center" variant="text">
            {selectedContact.name}
          </Text>
          <Text size="lg" align="center" variant="info">
            {selectedContact.phone}
          </Text>
          <Text size="lg" align="center" variant="info">
            {selectedContact.email}
          </Text>
        </>
      );
    } else return null;
  }, [update, selectedContact, updatedValues]);
  return (
    <>
      <ContactCardUpper>
        <FontAwesomeIcon onClick={() => onClose()} icon={faClose} size="xs" />
      </ContactCardUpper>
      <ContactCard data-testId="selected-contact-card">
        <ContactCardInnerContent>
          {updatedValuesMemo}
          {update && (
            <CreateContact
              onUpdate={(newContactValue) => {
                setUpdate(false);
                setUpdatedValues(newContactValue);
              }}
              defaultValues={updatedValues ? updatedValues : selectedContact}
              onClose={() => setUpdate(!update)}
              onCreate={onCreate}
              context="update"
            />
          )}
        </ContactCardInnerContent>

        <ContactCardLower>
          <>
            {!update && (
              <RoundedButton
                onClick={() => setUpdate(true)}
                data-testId="selected-update-contact"
                variant="update"
              >
                <FontAwesomeIcon icon={faPencil} size="xs" />
              </RoundedButton>
            )}
          </>
          <RoundedButton
            onClick={() => onDelete()}
            data-testId="selected-delete-contact"
            variant="delete"
          >
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </RoundedButton>
        </ContactCardLower>
      </ContactCard>
    </>
  );
};

export default SelectedContact;
