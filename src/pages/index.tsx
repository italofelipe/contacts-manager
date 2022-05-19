import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ContactList from "../components/ContactList";
import CreateContact from "../components/CreateContact";
import {
  AddContact,
  Box,
  Button,
  ContactCard,
  ContactCardInnerContent,
  ContactCardLower,
  ContactCardUpper,
  Container,
  H2Title,
  Text,
  TextContainer,
  Wrapper
} from "../styles/styles";
import { contactsMock } from "../__mocks__/contactsMock";

const addContactImage = "/assets/add_image.svg";
const chatImage = "/assets/chat_image.svg";

const Home = () => {
  const [addContact, setAddContact] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  return (
    <>
      <Head>
        <title>Telephonist</title>
        <meta
          name="description"
          content="An agenda application made with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <ContactList
          disabled={addContact}
          contacts={contactsMock}
          onSelect={(contact) => setSelectedContact(contact)}
        />
        <Container>
          <Box w={addContact ? "part" : "full"} disabled={addContact}>
            <TextContainer>
              <H2Title align="center">Telephonist</H2Title>
              <Text align="center" size="md" variant="text">
                All your contacts in one place.
              </Text>
              <Text align="center" size="sm" variant="info">
                To start, add a contact or select a contact to edit and see the
                magic done!
              </Text>
            </TextContainer>

            {addContact ? (
              <Image
                src={addContactImage}
                alt="Add a contact image."
                width={400}
                height={400}
              />
            ) : selectedContact ? (
              <>
                <ContactCardUpper>
                  <FontAwesomeIcon
                    onClick={() => setSelectedContact(null)}
                    icon={faClose}
                    size="xs"
                  />
                </ContactCardUpper>
                <ContactCard>
                  <ContactCardInnerContent>
                    <Text size="lg" align="center" variant="text">
                      {selectedContact.name}
                    </Text>
                    <Text size="lg" align="center" variant="info">
                      {selectedContact.phone}
                    </Text>
                    <Text size="lg" align="center" variant="info">
                      {selectedContact.email}
                    </Text>
                  </ContactCardInnerContent>

                  <ContactCardLower>
                    <div>
                      <FontAwesomeIcon
                        onClick={() => setSelectedContact(null)}
                        icon={faTrash}
                        size="xs"
                      />
                    </div>
                  </ContactCardLower>
                </ContactCard>
              </>
            ) : (
              <Image
                src={chatImage}
                alt="Manage contacts image."
                width={400}
                height={400}
              />
            )}
            <Button
              context="add"
              onClick={() => setAddContact(!addContact)}
              data-testid="add-contact-button"
            >
              Add contact
            </Button>
          </Box>

          {addContact ? (
            <AddContact data-testid="add-contact">
              <CreateContact onClose={() => setAddContact(false)} />
            </AddContact>
          ) : null}
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
