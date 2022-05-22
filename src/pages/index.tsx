import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [contactsList, setContactsList] = useState<Contact[] | []>(
    []
  );

  const [changeContact, setChangeContact] = useState<{
    contact: Contact;
    context: "update" | "delete" | "initial";
    modalOpened: boolean;
  } | null>(null);
  const [error, setError] = useState("");

  const fetchContacts = () => {
    axiosCallHandler({
      method: "get",
    })
      .then((APIResponse) => {
        APIResponse["response"] !== null
          ? setContactsList(APIResponse.response as Contact[])
          : setContactsList([]);
      })
      .catch(() =>
        setError(
          "There was an error while loading the contacts. Try again later."
        )
      );
  };
  const handleDeleteOrUpdateContact = (
    operation: HttpRequest["method"],
    contact: Contact
  ) => {
    console.log("Bateu no handler", { operation, contact });
    axiosCallHandler({ method: operation, data: contact })
      .then(() => {
        setChangeContact({ contact, context: "delete", modalOpened: true });
        return fetchContacts();
      })
      .catch(() =>
        setError(
          "There was an error while loading the contacts. Try again later."
        )
      );
  };

  useEffect(() => {
    fetchContacts();
  }, []);
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
          contacts={contactsList}
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
              <SelectedContact
                onCreate={fetchContacts}
                onClose={() => setSelectedContact(null)}
                onDelete={() =>
                  handleDeleteOrUpdateContact("delete", selectedContact)
                }
                onUpdate={() =>
                  handleDeleteOrUpdateContact("put", selectedContact)
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
                onCreate={fetchContacts}
              />
            </AddContact>
          ) : null}
        </Container>

        <Modal
          context={changeContact ? changeContact!.context : "initial"}
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
