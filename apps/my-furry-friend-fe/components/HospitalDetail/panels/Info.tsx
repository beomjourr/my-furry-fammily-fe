import { Accordion } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Line from '../Divider';
import { HospitalResponseData } from '../../../service/hospitalDetail';
import Images from '../info/Images';
import Title from '../info/Title';
import Menu from '../info/Menu';
import OperatingTimes from '../info/OperatingTimes';
import Category from '../info/Category';
import Description from '../info/Description';
import Location from '../info/Location';
import Sns from '../info/SNS';
import Notice from '../info/Notice';

interface InfoProps {
  sendWriteReviewGAEvent?: Function;
  sendCallingGAEvent?: Function;
  sendCollectionGAEvent?: Function;
  data?: HospitalResponseData;
}

function Info({ sendWriteReviewGAEvent, sendCallingGAEvent, sendCollectionGAEvent, data }: InfoProps) {
  if (!data) return null;

  return (
    <>
      <Images images={data.images} />
      <Title
        is_cooperation={data.is_cooperation}
        has_mri={data.has_mri}
        has_ct={data.has_ct}
        name={data.name}
        number_of_reviews={data.number_of_reviews}
        review_rating={data.review_rating}
      />
      <Menu sendWriteReviewGAEvent={sendWriteReviewGAEvent} sendCallingGAEvent={sendCallingGAEvent} homepage_url={data.url.homepage_url} tell={data.tell} />
      <Accordion defaultIndex={[1, 2, 3, 4]} allowMultiple padding="0 16px">
        <OperatingTimes operating_times={data.operating_times} />
        <Line />
        <Category categories={data.categories} />
        <Line />
        <Description info_description={data.info_description} />
        <Line />
        <Location location={data.location} />
        <Line />
        <Sns url={data.url} />
      </Accordion>
      <Line />
      <Notice sendCollectionGAEvent={sendCollectionGAEvent} />
    </>
  );
}
export default Info;
