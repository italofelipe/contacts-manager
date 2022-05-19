import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Contact,
  ContactCenter,
  ContactLeft,
  ContactPhotoContainer,
  ContactRight,
  Text
} from "../styles/styles";

interface ContactCardProps extends Contact {
  onSelect: () => void;
}
const ContactCard = ({ name, email, phone, onSelect }: ContactCardProps) => {
  return (
    <Contact onClick={onSelect}>
      <ContactLeft>
        <ContactPhotoContainer />
      </ContactLeft>
      <ContactCenter>
        <Text align="left" size="md" variant="text">
          {name}
        </Text>
        <Text align="left" size="sm" variant="info">
          {email}
        </Text>
        <Text align="left" size="sm" variant="info">
          {phone}
        </Text>
      </ContactCenter>
      <ContactRight>
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </ContactRight>
    </Contact>
  );
};

export default ContactCard;
