import { createServer, Model } from "miragejs";
import { contactsMock } from "../__mocks__/contactsMock";

const contacts = [...contactsMock];

export const server = createServer({
  models: {
    contact: Model,
  },
  routes() {
    this.namespace = "api";
    this.get("/contacts", (schema) => [...contacts]);

    this.post("/contacts", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);
      contacts.push(attrs);
      return { contact: attrs };
    });
  },
});
