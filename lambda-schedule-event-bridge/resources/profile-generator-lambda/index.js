const faker = require("@faker-js/faker/locale/pt_BR");

exports.handler = async (event, context) => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let phoneNumber = faker.phone.phoneNumber();
  let vehicleType = faker.vehicle.vehicle();

  let response = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    vehicleType: vehicleType,
  };

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profile: response,
    }),
  };
};