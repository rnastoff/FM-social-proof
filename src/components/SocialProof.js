import classes from './SocialProof.module.css';

import Card from './Card';
import RatingBar from './RatingBar';
import QuoteBox from './QuoteBox';

import { buyerData } from './buyerData';

const SocialProof = () => {


  const generateBuyerHtml = () => {
    return buyerData.map(buyer => {
      return <QuoteBox image={buyer.image} name={buyer.name} quote={buyer.quote} key={buyer.name} />
    })
  }

  return (
    <Card>
      <div className={classes.top}>
        <div className={classes.left}>
          <h1>10,000+ of our users love our products.</h1>
          <p>We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>
        <div className={classes.right}>
          <RatingBar business={"Reviews"} />
          <RatingBar business={"Report Guru"} />
          <RatingBar business={"BestTech"} />
        </div>
      </div>

      <div className={classes.bottom}>
        {generateBuyerHtml()}
      </div>


    </Card>
  )
}

export default SocialProof;