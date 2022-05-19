import Head from "next/head";
import { useState } from "react";
import {
  AddButton,
  AddContact,
  Box,
  Container,
  Text,
  Wrapper
} from "../styles/styles";

const Home = () => {
  const [addContact, setAddContact] = useState<boolean>(false);
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
        <Container>
          <h2>Telephonist</h2>
          <Text size="xl" variant="text">
            All your contacts in one place.
          </Text>
        </Container>

        <Container>
          <Box>
            <Text size="sm" variant="info">
              To start, add a contact or select a contact to edit and see the
              magic done!
            </Text>
            <AddButton onClick={() => setAddContact(!addContact)}>
              Add contact
            </AddButton>
          </Box>

          {addContact && (
            <AddContact>
              <Text size="lg" variant="info">
                Add a new contact
              </Text>
            </AddContact>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
