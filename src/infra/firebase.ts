import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";

class Firebase {
  private apiKey: string;
  private appId: string;
  private authDomain: string;
  private databaseURL: string;
  private projectId: string;
  private messagingSenderId: string;
  private storageBucket: string;
  private measurementId: string;

  constructor(environmentVariables: EnvironmentVariables) {
    this.apiKey = environmentVariables.apiKey;
    this.authDomain = environmentVariables.authDomain;
    this.databaseURL = environmentVariables.databaseURL;
    this.projectId = environmentVariables.projectId;
    this.storageBucket = environmentVariables.storageBucket;
    this.messagingSenderId = environmentVariables.messagingSenderId;
    this.appId = environmentVariables.appId;
    this.measurementId = environmentVariables.measurementId;
    this.initAnalytics();
  }

  initAnalytics() {
    const firebaseEnvConfig:EnvironmentVariables = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId,
      measurementId: this.measurementId
    };
    const app = initializeApp(firebaseEnvConfig);

    const analytics = isSupported()
      .then((wetherIsSupported) =>
        wetherIsSupported ? getAnalytics(app!) : null
      )
      .catch((err) => console.log("An unexpected error was thrown:", err));
    return analytics;
  }
  get endpointURL() {
    return this!.databaseURL;
  }
}

export default Firebase;
