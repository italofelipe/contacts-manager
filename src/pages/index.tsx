import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import ContactList from "../components/ContactList";
import CreateContact from "../components/CreateContact";
import Modal from "../components/Modal";
import SelectedContact from "../components/SelectedContact";
import { axiosCallHandler } from "../infra/axiosHelper";
import {
  AddContact,
  Box,
  Button,
  Container,
  H2Title,
  RoundedButton,
  Text,
  TextContainer,
  Wrapper
} from "../styles/styles";

const addContactImage = "/assets/add_image.svg";
const chatImage = "/assets/chat_image.svg";

const Home = () => {
  const [addContact, setAddContact] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  // Workaround to handle a next tricky thing that's the fact that often, on reload, it doesn't fetches the data.
  const [contactsList, setContactsList] = useState<Contact[] | []>([]);

  const [changeContact, setChangeContact] = useState<{
    contact: Contact;
    context: "update" | "delete" | "initial";
    modalOpened: boolean;
  } | null>(null);
  const [error, setError] = useState("");

  const fetchContacts = useCallback(() => {
    axiosCallHandler({
      method: "get",
    })
      .then((APIResponse) => {
        APIResponse["response"] !== null
          ? setContactsList(APIResponse.response as Contact[])
          : setContactsList([]);
      })
      .catch((err) => {
        setError(
          "There was an error while loading the contacts. Try again later."
        );
        throw new Error(
          "There was an error while loading the contacts. Try again later."
        );
      });
  }, []);
  const handleDeleteOrUpdateContact = (
    operation: HttpRequest["method"],
    contact: Contact
  ) => {
    axiosCallHandler({ method: operation, data: contact })
      .then(() => {
        setChangeContact({ contact, context: "delete", modalOpened: true });
        setSelectedContact(null);
        return fetchContacts();
      })
      .catch((err) => {
        setError(
          "There was an error while loading the contacts. Try again later."
        );
        throw new Error(
          "There was an error while deleting the contacts. Try again later."
        );
      });
  };

  const contactListMemo = useMemo(() => {
    return (
      <ContactList
        disabled={addContact || !!selectedContact}
        contacts={contactsList}
        onSelect={(contact) => setSelectedContact(contact)}
      />
    );
  }, [contactsList, selectedContact, addContact]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
  useEffect(() => {
    contactListMemo;
  }, [contactListMemo, contactsList]);
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
        {contactListMemo}

        {!addContact && (
          <>
            <RoundedButton variant="add" className="add-responsive">
              <FontAwesomeIcon
                onClick={() => setAddContact(true)}
                icon={faAdd}
                size="xs"
              />
            </RoundedButton>
          </>
        )}

        <Container>
          <Box
            w={addContact ? "part" : "full"}
            disabled={addContact}
            updateContact={Boolean(selectedContact)}
          >
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
              <SelectedContact
                onCreate={() => {
                  setTimeout(() => {
                    return fetchContacts();
                  }, 500);
                }}
                onClose={() => setSelectedContact(null)}
                onDelete={() =>
                  handleDeleteOrUpdateContact("delete", selectedContact)
                }
                selectedContact={selectedContact}
              />
            ) : (
              <Image
                src={chatImage}
                alt="Manage contacts image."
                width={400}
                height={400}
              />
            )}
            {!selectedContact && (
              <Button
                context="add"
                onClick={() => setAddContact(!addContact)}
                data-testid="add-contact-button"
              >
                Add contact
              </Button>
            )}
          </Box>

          {addContact ? (
            <AddContact data-testid="add-contact">
              <CreateContact
                context="create"
                onClose={() => setAddContact(false)}
                onCreate={() => fetchContacts()}
              />
            </AddContact>
          ) : null}
        </Container>

        <Modal
          isOpen={changeContact ? changeContact!.modalOpened : false}
          onClose={() => setChangeContact(null)}
          text={`${
            changeContact ? changeContact!.contact.name : ""
          } was removed from your contact list`}
          title={"Successful deleted"}
        />
      </Wrapper>
    </>
  );
};

export default Home;
