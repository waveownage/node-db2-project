
exports.seed = async function(knex) {
  await knex("cars").insert([
   {VIN: "L3H7HKKKGF9", make: "Jeep", mileage: 20000, ['transmission type']: "4"},
  ])

};
