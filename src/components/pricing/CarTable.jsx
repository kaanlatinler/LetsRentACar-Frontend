import React from "react";

const carData = [
  {
    image: "/assets/images/car-1.jpg",
    name: "Chevrolet SUV Car",
    perHour: 10.99,
    perDay: 60.99,
    perMonth: 995.99,
    fuelSurcharge: 3,
  },
  {
    image: "/assets/images/car-2.jpg",
    name: "Ford Mustang",
    perHour: 12.99,
    perDay: 70.99,
    perMonth: 1095.99,
    fuelSurcharge: 4,
  },
  {
    image: "/assets/images/car-3.jpg",
    name: "Tesla Model 3",
    perHour: 15.99,
    perDay: 90.99,
    perMonth: 1295.99,
    fuelSurcharge: 5,
  },
  {
    image: "/assets/images/car-4.jpg",
    name: "BMW X5",
    perHour: 18.99,
    perDay: 100.99,
    perMonth: 1395.99,
    fuelSurcharge: 6,
  },
];

const CarTable = () => {
  return (
    <table className="table">
      <thead className="thead-primary">
        <tr className="text-center">
          <th>&nbsp;</th>
          <th>Car Model</th>
          <th className="bg-primary heading">Per Hour Rate</th>
          <th className="bg-dark heading">Per Day Rate</th>
          <th className="bg-black heading">Leasing</th>
        </tr>
      </thead>
      <tbody>
        {carData &&
          carData.map((car, index) => (
            <tr key={index} className="">
              <td className="car-image">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${car.image})`,
                  }}
                ></div>
              </td>
              <td className="product-name">
                <h3>{car.name}</h3>
                <p className="mb-0 rated">
                  <span>Rated: </span>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="ion-ios-star"></span>
                  ))}
                </p>
              </td>
              <td className="price">
                <p className="btn-custom">
                  <a href="#" className="rent-btn">
                    Rent a car
                  </a>
                </p>
                <div className="price-rate">
                  <h3>
                    <span className="num">
                      <small className="currency">$</small> {car.perHour}
                    </span>
                    <span className="per">/per hour</span>
                  </h3>
                  <span className="subheading">
                    ${car.fuelSurcharge}/hour fuel surcharges
                  </span>
                </div>
              </td>
              <td className="price">
                <p className="btn-custom">
                  <a href="#" className="rent-btn">
                    Rent a car
                  </a>
                </p>
                <div className="price-rate">
                  <h3>
                    <span className="num">
                      <small className="currency">$</small> {car.perDay}
                    </span>
                    <span className="per">/per day</span>
                  </h3>
                  <span className="subheading">
                    ${car.fuelSurcharge}/hour fuel surcharges
                  </span>
                </div>
              </td>
              <td className="price">
                <p className="btn-custom">
                  <a href="#" className="rent-btn">
                    Rent a car
                  </a>
                </p>
                <div className="price-rate">
                  <h3>
                    <span className="num">
                      <small className="currency">$</small> {car.perMonth}
                    </span>
                    <span className="per">/per month</span>
                  </h3>
                  <span className="subheading">
                    ${car.fuelSurcharge}/hour fuel surcharges
                  </span>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CarTable;
