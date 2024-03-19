import colton from '../images/image-colton.jpg';
import irene from '../images/image-irene.jpg';
import anne from '../images/image-anne.jpg';

const images = [colton, irene, anne];

const users = [
  {
    img: images[0],
    name: 'Colton Smith',
    verfication: 'Verified Buyer',
    review: `"We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also
        received it in time. Excellent!"`,
  },
  {
    img: images[1],
    name: 'Irene Roberts',
    verfication: 'Verified Buyer',
    review: `"Customer service is always excellent and very quick turn around.
        Completely delighted with the simplicity of the purchase and the
        speed of delivery."`,
  },
  {
    img: images[2],
    name: 'Anne Wallace',
    verfication: 'Verified Buyer',
    review: `"Put an order with this company and can only praise them for the
        very high standard. Will definitely use them again and recommend
        them to everyone!"`,
  },
];

const reviewFrom = [
  {
    name: 'Reviews',
  },
  {
    name: 'Report Guru',
  },
  {
    name: 'BestTech',
  },
];

export default users;
export { reviewFrom };
