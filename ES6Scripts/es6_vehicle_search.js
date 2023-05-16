let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

console.log("Red Vehicles");
const redVehicles = vehicles.filter((vehicle) => vehicle.color === "Red");
redVehicles.forEach((vehicle) => console.log(vehicle.licenseNo));
console.log("-".repeat(30));
console.log("Expired Registration");
const currentDate = new Date();
const expiredReg = vehicles.filter(
  (vehicle) => currentDate > vehicle.registrationExpires
);
expiredReg.forEach((vehicle) => console.log(vehicle.licenseNo));
console.log("-".repeat(30));

console.log("Capacity of at least 6:");
const canHoldAtLeastSix = vehicles.filter((vehicle) => vehicle.capacity >= 6);
canHoldAtLeastSix.forEach((vehicle) => console.log(vehicle.licenseNo));
console.log("-".repeat(30));
console.log("Tag ends with 222:");
const tagEndsWith222 = vehicles.filter((vehicle) =>
  vehicle.licenseNo.endsWith("222")
);
tagEndsWith222.forEach((vehicle) => console.log(vehicle.licenseNo));
