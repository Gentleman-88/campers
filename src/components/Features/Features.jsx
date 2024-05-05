import FeatureCard from 'components/FeatureCard/FeatureCard';
import Booking from '../Booking/Booking';
import s from './Features.module.css';
import { IoPeopleOutline, IoBedOutline } from 'react-icons/io5';
import {
  TbAutomaticGearbox,
  TbGasStation,
  TbToolsKitchen2,
  TbAirConditioning,
} from 'react-icons/tb';
import { FiWind } from 'react-icons/fi';
import { SiYoutubemusic } from 'react-icons/si';
import { MdOutlineRadio, MdOutlineMicrowave } from 'react-icons/md';

const Features = ({ advert }) => {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,

    details,
    engine,
    transmission,
    adults,
  } = advert;

  return (
    <div className={s.container}>
      <div className={s.info}>
        <ul className={s.options}>
          <li>
            <FeatureCard
              icon={<IoPeopleOutline />}
              text=" adults"
              data={adults}
            />
          </li>
          {transmission === 'automatic' && (
            <li>
              <FeatureCard
                icon={<TbAutomaticGearbox />}
                text="Automatic"
                data={''}
              />
            </li>
          )}
          {details.airConditioner > 0 && (
            <li>
              <FeatureCard icon={<FiWind />} text="AC" data={''} />
            </li>
          )}
          {engine === 'petrol' && (
            <li>
              <FeatureCard icon={<TbGasStation />} text="Petrol" data={''} />
            </li>
          )}
          {details.kitchen > 0 && (
            <li>
              <FeatureCard
                icon={<TbToolsKitchen2 />}
                text="Kitchen"
                data={''}
              />
            </li>
          )}
          <li>
            <FeatureCard
              icon={<IoBedOutline />}
              text=" beds"
              data={details.beds}
            />
          </li>

          {details.airConditioner > 0 && (
            <li>
              <FeatureCard
                icon={<TbAirConditioning />}
                text=" air conditioner"
                data={details.airConditioner}
              />
            </li>
          )}
          {details.CD > 0 && (
            <li>
              <FeatureCard icon={<SiYoutubemusic />} text="CD" data={''} />
            </li>
          )}
          {details.radio > 0 && (
            <li>
              <FeatureCard icon={<MdOutlineRadio />} text="Radio" data={''} />
            </li>
          )}
          {details.hob > 0 && (
            <li>
              <FeatureCard
                icon={<MdOutlineMicrowave />}
                text=" hob"
                data={details.hob}
              />
            </li>
          )}
        </ul>
        <div className={s.details}>
          <h3 className={s.title}>Vehicle details</h3>
          <ul className={s.detailsList}>
            <li>
              <p className={s.listName}>Form</p>
              <p className={s.listFeature}>{form}</p>
            </li>
            <li>
              <p className={s.listName}>Length</p>
              <p className={s.listFeature}>{length}</p>
            </li>
            <li>
              <p className={s.listName}>Width</p>
              <p className={s.listFeature}>{width}</p>
            </li>
            <li>
              <p className={s.listName}>Hight</p>
              <p className={s.listFeature}>{height}</p>
            </li>
            <li>
              <p className={s.listName}>Tank</p>
              <p className={s.listFeature}>{tank}</p>
            </li>
            <li>
              <p className={s.listName}>Consumption</p>
              <p className={s.listFeature}>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <Booking />
    </div>
  );
};

export default Features;
