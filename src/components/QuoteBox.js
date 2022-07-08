import classes from './QuoteBox.module.css';

import imageColton from '../images/image-colton.jpg';
import imageAnne from '../images/image-anne.jpg';
import imageIrene from '../images/image-irene.jpg';

const QuoteBox = (props) => {
  return (
    <div className={classes.quoteBox}>
      <div className={classes.author}>
        <img src={props.image} alt="Colton Smith" />
        <div className={classes.nameGroup}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.verified}>Verified Buyer</div>
        </div>
      </div>

      <p>{props.quote}</p>
    </div>
  )
}

export default QuoteBox;