import usabilla from 'usabilla-react-native';


class UsabillaService {
  static _instance;

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  async init() {
    const { USABILLA_APP_ID } = await Promise.resolve("47b06c69-d8f2-433d-9e70-dcd4914b230f");
    await usabilla.initialize(USABILLA_APP_ID);
  }

  openFeedbackForm(
    feedbackFormId,
    originCustomerId,
    originCustomerEmail
  ) {
    usabilla.setCustomVariables({ originCustomerId, originCustomerEmail });
    usabilla.loadFeedbackForm(feedbackFormId);
  }

  static async Instance() {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new this();
    await this._instance.init();
    return this._instance;
  }
}

export const openFeedbackForm = async (
  feedbackFormId,
  originCustomerId,
  originCustomerEmail
) => {
  const service = await UsabillaService.Instance();
  await service.openFeedbackForm(
    feedbackFormId,
    originCustomerId,
    originCustomerEmail
  );
  return Promise.resolve();
};
