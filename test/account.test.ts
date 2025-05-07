const { test } = require("@playwright/test");
const allure = require("allure-js-commons");

test("Verify confirmation message after updating profile", async () => {
  await allure.label("ALLURE_MANUAL", "true");

  await allure.epic("Account");
  await allure.feature("Account Settings");
  await allure.story("Update profile information");

  await allure.step("Given the user has updated their profile details", async () => { });
  await allure.step("When the user clicks Save Changes", async () => { });
  await allure.step("Then a confirmation message should be displayed", async () => { });
  await allure.step("And the updated profile information should be shown", async () => { });
});

test("Verify email preferences can be customized", async () => {
  await allure.epic("Account");
  await allure.feature("Account Settings");
  await allure.story("Change notification preferences");

  await allure.step("Given the user is on the email preferences page", async () => { });
  await allure.step("When the user updates their email notification settings", async () => { });
  await allure.step("Then the email preferences should be saved", async () => { });
  await allure.step("And the user should receive emails according to the updated preferences", async () => { });
});

test("Verify user can log out from a specific device @allure.id:10226 @Positive", async () => {
  await allure.epic("Account");
  await allure.feature("Security Settings");
  await allure.story("Device management");

  await allure.step("Given the user is viewing their logged-in devices", async () => { });
  await allure.step("When the user selects a device and clicks Log Out", async () => { });
  await allure.step("Then the device should be logged out", async () => { });
  await allure.step("And a confirmation message should be shown", async () => { });
});
