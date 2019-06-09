'use strict';
const products = [
  {
        name: "Sledgehammer",
        price: 125.76
  }, {
        name: "Axe",
        price: 190.51
  }, {
        name: "Bandsaw",
        price: 562.14
  }, {
        name: "Chisel",
        price: 13.9
  }, {
        name: "Hacksaw",
        price: 19.45
  }
];


exports.http = (request, response) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

  response.status(200).headers(headers).send({ data: products });
};

exports.event = (event, callback) => {
  callback();
};
