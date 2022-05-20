class RequestData implements IRequestData {
  public response: unknown = null;
  public error: boolean = false;
  public loading: boolean = false;
  constructor(reqData: {
    response: unknown;
    error: boolean;
    loading: boolean;
  }) {
    this.response = reqData.response;
    this.error = reqData.error;
    this.loading = reqData.loading;
  }

  getRequestData() {
    return {
      response: this.response,
      error: this.error,
      loading: this.loading,
    };
  }
}
export default RequestData;
