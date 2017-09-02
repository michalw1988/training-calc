import { TrainingCalcPage } from './app.po';

describe('training-calc App', () => {
  let page: TrainingCalcPage;

  beforeEach(() => {
    page = new TrainingCalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
