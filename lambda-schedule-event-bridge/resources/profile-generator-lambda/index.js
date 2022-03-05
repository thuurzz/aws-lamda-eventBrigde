const { name, phone, vehicle } = require("@faker-js/faker/locale/pt_BR"); 

exports.handler = async (event, context) => {
  let firstName = name.firstName();
  let lastName = name.lastName();
  let phoneNumber = phone.phoneNumber();
  let vehicleType = vehicle.vehicle();

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