describe('App launch', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('shows the starter home screen text', async () => {
    await expect(element(by.text('Welcome!'))).toBeVisible();
  });
});
