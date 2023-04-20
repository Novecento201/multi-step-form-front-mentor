import './EndSection.css';
import thankImg from '../../assets/images/icon-thank-you.svg';

const EndSection = () => {
  return (
    <div className="end__container">
      <img src={thankImg} />
      <h2 className="section__title end__title">Thank you!</h2>
      <p className="section__paragraph end__paragraph">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default EndSection;
