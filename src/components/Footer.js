import restaurantFoodImg from "../img/restaurant_food.jpg";

function FooterItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        {props.list.map((listItem) => (
          <li key={listItem.name}>
            <a href="/">{listItem.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer-content">
      <div className="section-wrapper footer-container">
        <img
          src={restaurantFoodImg}
          alt="A photo of Little Lemon restaurant's food"
          className="footer-img"
        />
        <FooterItem
          className="section-wrapper footer-nav-item"
          title="Home"
          list={[
            { name: "Reservation" },
            { name: "Order online" },
            { name: "Login" },
          ]}
        />
        <FooterItem
          className="section-wrapper footer-nav-item"
          title="Contact"
          list={[
            { name: "Address" },
            { name: "Phone Number" },
            { name: "Email" },
          ]}
        />
        <FooterItem
          className="section-wrapper footer-nav-item"
          title="Social Media"
          list={[
            { name: "Instagram" },
            { name: "Facebook" },
            { name: "Twitter" },
          ]}
        />
      </div>
      <p className="copyright">Copyright ©2023 Little Lemon</p>
    </footer>
  );
}
