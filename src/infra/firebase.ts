
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
  }

  get endpointURL() {
    return this!.databaseURL;
  }
}

export default Firebase;
