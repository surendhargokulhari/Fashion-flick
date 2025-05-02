
import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const summerItems = [
  {
    name: "Men",
    img: "https://img.freepik.com/premium-photo/arafed-man-black-shirt-jeans-with-black-bag_988987-23991.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products", // 👈 where to scroll
  },
  {
    name: "Women", // Fixed the typo here
    img: "https://img.freepik.com/premium-photo/beautiful-girl-fashion-wear_118124-163595.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products",
  },
  {
    name: "Kids",
    img: "https://img.freepik.com/premium-photo/fashion-boy-girl-stylish-clothes-colored-wall_86390-1241.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products",
  },
  {
    name: "Shoes",
    img: "https://img.freepik.com/premium-photo/blue-casual-men-s-fashion-shoes-isolated-white-background_1007204-33506.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products",
  },
  {
    name: "Gen Z",
    img: "https://img.freepik.com/premium-photo/young-friends-using-phone-while-sitting-street_1048944-19041226.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products",
  },
  {
    name: "Festive",
    img: "https://img.freepik.com/premium-photo/indian-young-brother-sister-celebrating-raksha-bandhan-rakhi-festival-bhai-dooj-bhau-beej-with-poja-thali-sweets-gifts-taking-selfie-pictures_466689-13049.jpg?ga=GA1.1.1204324961.1740241601&semt=ais_hybrid&w=740",
    targetId: "products",
  },
];

const Welcome = () => {
  const handleCardClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="my-5" id="home">
      <h3 className="section-title">LIFESTYLE</h3>
      <div className="summer-scroll-container">
        {summerItems.map((item) => (
          <div
            key={item.name} // Using item.name to ensure uniqueness
            className="summer-card"
            onClick={() => handleCardClick(item.targetId)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="summer-img img-fluid" // Ensures responsive images
            />
            <div className="overlay">{item.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Welcome;