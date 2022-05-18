export const envMapper: EnvironmentVariables = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY!,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID!,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN!,
  databaseURL: process.env.NEXT_APP_FIREBASE_DATABASE_URL!,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID!,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID!,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET!,
  measurementId: process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID!
};
