import s from './FeatureCard.module.css';
const FeatureCard = ({ icon, text, data }) => {
  return (
    <div className={s.card}>
      <div>{icon}</div>
      <p className={s.featureName}>{`${data}${text}`}</p>
    </div>
  );
};

export default FeatureCard;
