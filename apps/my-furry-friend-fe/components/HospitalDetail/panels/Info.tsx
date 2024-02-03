import { Accordion } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Line from '../Divider';
import { HospitalResponseData } from '../../../service/hospitalDetail';
import Images from '../Info/Images';
import Title from '../Info/Title';
import Menu from '../Info/Menu';
import OperatingTimes from '../Info/OperatingTimes';
import Category from '../Info/Category';
import Description from '../Info/Description';
import Location from '../Info/Location';
import Sns from '../Info/SNS';
import Notice from '../Info/Notice';

interface InfoProps {
  data?: HospitalResponseData;
}

function Info({ data }: InfoProps) {
  if (!data) {
    return null;
  }

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
      <Menu homepage_url={data.url.homepage_url} tell={data.tell} />
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
      <Notice />
    </>
  );
}
export default Info;
