import { useNavigate } from "react-router-dom";
import restaurantChefbImg from "./img/restaurant_chefB.jpg";
import greekSaladImg from "./img/greek_salad.jpg";
import bruchettaImg from "./img/bruchetta.jpg";
import lemonDessertImg from "./img/lemon_dessert.jpg";
import customer1Img from "./img/customer1.jpg";
import customer2Img from "./img/customer2.jpg";
import customer3Img from "./img/customer3.jpg";
import customer4Img from "./img/customer4.jpg";
import restaurantChefsImg from "./img/Mario_and_Adrian A.jpg";
import "./HomePage.scss";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <section className="section-wrapper header-content">
        <div>
          <h1>Little Lemon</h1>
          <h3 className="white">Chicago</h3>
          <p className="white">
            {/* We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil error
            sapiente nobis distinctio, accusantium numquam modi? Assumenda ipsam
            quis aliquid tempora molestiae.
          </p>
          <button
            className="btn"
            onClick={() => {
              navigate("/booking");
            }}
          >
            Reserve a Table
          </button>
        </div>
        <img
          src={restaurantChefbImg}
          alt="A photo of one of Little Lemon restaurant's chef"
          className="restaurant-chefb"
        />
      </section>
    </header>
  );
}

function MenuItem(props) {
  return (
    <div className="menu-item">
      <img src={props.img} className="menu-item-img" />
      <h3>{props.title}</h3>
      <p className="muted">{props.description}</p>
      <p className="price">${props.price}</p>
    </div>
  );
}

function RatingStar(props) {
  return (
    <div>
      {Array(props.numberOfStars)
        .fill(null)
        .map((_, i) => (
          <div key={`Star-${i}`} class="clip-star" />
        ))}
    </div>
  );
}

function TestimonialsItem(props) {
  return (
    <div className="testimonials-item">
      <p>
        <RatingStar numberOfStars={props.numberOfStars} />
      </p>
      <p>{props.name}</p>
      <img src={props.img} className="testimonials-section-img" />
      <p>{props.text}</p>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="menu-content">
        <div className="section-wrapper menu-head">
          <h2>Specials</h2>
          <button className="btn">Online Menu</button>
        </div>
        <div className="section-wrapper menu-items">
          <MenuItem
            img={greekSaladImg}
            title="Greek Salad"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={12.99}
          />
          <MenuItem
            img={bruchettaImg}
            title="Bruchetta"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={5.99}
          />
          <MenuItem
            img={lemonDessertImg}
            title="Lemon Dessert"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={4.99}
          />
        </div>
      </section>
      <section className="section-wrapper testi-content">
        <h2>Testimonials</h2>
        <div className="testimonials-section">
          <TestimonialsItem
            name="Name"
            img={customer1Img}
            text="Review text"
            numberOfStars={3}
          />
          <TestimonialsItem
            name="Name"
            img={customer2Img}
            text="Review text"
            numberOfStars={4}
          />
          <TestimonialsItem
            name="Name"
            img={customer3Img}
            text="Review text"
            numberOfStars={3}
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={customer4Img}
            text="Review text"
            numberOfStars={5}
          />
        </div>
      </section>
      <section className="section-wrapper restau-background">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p className="muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            neque quidem omnis blanditiis molestias consequatur earum iste nulla
            magnam odio saepe, ea autem natus doloremque esse fuga ullam eveniet
            porro.
          </p>
        </div>
        <img
          src={restaurantChefsImg}
          alt="A photo of Little Lemon restaurant's chefs"
          className="restaurantchefs-img"
        />
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
