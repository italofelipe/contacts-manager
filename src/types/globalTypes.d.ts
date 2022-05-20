interface EnvironmentVariables {
  apiKey: string;
  appId: string;
  authDomain: string;
  databaseURL: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
  measurementId: string;
}

interface Contact extends ContactFields {
  imageUrl?: string;
  id?: string;
}

interface ContactFields {
  name: string;
  phone: string;
  email: string;
}

interface IRequestData {
  response: unknown;
  error: unknown;
  loading: boolean;
}
