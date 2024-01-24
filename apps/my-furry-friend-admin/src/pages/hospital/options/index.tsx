import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { HospitalsQueryKey } from '../../../constants/query-key.ts';
import { getHospital } from '../../../models/hospital/hospital-search.ts';
import HospitalCategory from './components/HospitalCategory.tsx';
import OperationTime from './components/OperationTime.tsx';
import ClinicFee from './components/clinicFee/ClinicFee.tsx';
import Review from './components/Review.tsx';
import Image from './components/Image.tsx';

export default function HospitalOptionsEdit() {
  const { id } = useParams();

  const { data: hospitalData } = useQuery({
    queryKey: [HospitalsQueryKey.hospitalsSearch, id],
    queryFn: () => getHospital(id!),
    enabled: !!id,
  });

  return (
    <>
      <HospitalCategory id={id} hospitalData={hospitalData?.data.data} />
      <OperationTime id={id} hospitalData={hospitalData?.data.data} />
      <ClinicFee id={id} hospitalData={hospitalData?.data.data} />
      <Image id={id} />
      <Review id={id} />
    </>
  );
}
