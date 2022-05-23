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

interface ContactCardProps extends Omit<Contact, "id"> {
  onSelect: () => void;
}
const ContactCard = ({
  name,
  email,
  phone,
  imageUrl,
  onSelect,
}: ContactCardProps) => {
  return (
    <Contact onClick={onSelect}>
      <ContactLeft>
        <ContactPhotoContainer photo={imageUrl!} />
      </ContactLeft>
      <ContactCenter>
        <Text align="left" size="sm" variant="text">
          {name}
        </Text>
        <Text align="left" size="xs" variant="info">
          {email}
        </Text>
        <Text align="left" size="xs" variant="info">
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
