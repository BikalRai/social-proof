import Card from './components/Card';
import Rating from './components/Rating';
import users, { reviewFrom } from './assets/utilities/info';
import mobileBgTop from './assets/images/bg-pattern-top-mobile.svg';
import desktopBgTop from './assets/images/bg-pattern-top-desktop.svg';
import bgBotMob from './assets/images/bg-pattern-bottom-mobile.svg';

import bgBotDesk from './assets/images/bg-pattern-bottom-desktop.svg';
import Footer from './components/Footer';

function App() {
  // console.log(users);
  // console.log(reviewFrom);
  return (
    <div className="App">
      <picture style={{ position: 'absolute', zIndex: -1 }}>
        <source media="(min-width: 650px)" srcSet={desktopBgTop} />
        <img src={mobileBgTop} alt="BG top" />
      </picture>
      <div className="content">
        <div className="content__top">
          <div className="content__top-desc">
            <h1>10,000+ of our users love our products.</h1>
            <p className="desc">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="reviews">
            {reviewFrom.map((review, i) => (
              <Rating key={i} name={review.name} />
            ))}
          </div>
        </div>
        <div className="users">
          {users.map((user, i) => (
            <Card
              key={i}
              img={user.img}
              name={user.name}
              verification={user.verfication}
              review={user.review}
            />
          ))}
        </div>
      </div>
      <picture
        style={{
          position: 'absolute',
          bottom: '-5rem',
          left: '0',
          right: '0',
          zIndex: -2,
        }}
      >
        <source media="(min-width: 650px)" srcSet={bgBotDesk} />
        <img src={bgBotMob} alt="BG bottom" />
      </picture>
      <Footer />
    </div>
  );
}

export default App;
