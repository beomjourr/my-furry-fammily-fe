import { App, Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import {
  getHospital,
  HospitalRequestData,
  patchHospital,
  postHospital,
} from '../../../models/hospital/hospital-search.ts';
import SubmitButton from '../../../components/common/button/SubmitButton.tsx';
import { HospitalQueryKey } from '../../../constants/query-key.ts';
import { queryClient } from '../../../main.tsx';
import Categories from './components/Categories.tsx';
import Default from './components/Default.tsx';
import Social from './components/Social.tsx';

interface FormValues extends Omit<Partial<HospitalRequestData>, 'id'> {
  address?: string;
  detail_address?: string;
}

interface HospitalProps {
  type: 'create' | 'edit';
}

const HospitalRegister = ({ type }: HospitalProps) => {
  const { id } = useParams();
  const { message } = App.useApp();
  const [form] = useForm<FormValues>();
  const navigate = useNavigate();

  const options = {
    onSuccess: () => {
      message.success('성공적으로 처리되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [HospitalQueryKey.hospitalSearch],
      });
      navigate('/hospital/search');
    },
    onError: () => {
      message.error('오류가 발생했습니다.');
    },
  };

  const { data: hospitalData } = useQuery({
    queryKey: [HospitalQueryKey.hospitalSearch, id],
    queryFn: () => getHospital(id!),
    enabled: type === 'edit' && !!id,
  });

  const { mutate: postHospitalMutate, isPending: isPostPending } = useMutation({
    mutationFn: (data: Omit<Partial<HospitalRequestData>, 'id'>) =>
      postHospital(data),
    ...options,
  });

  const { mutate: patchHospitalMutate, isPending: isPatchPending } =
    useMutation({
      mutationFn: (data: Partial<HospitalRequestData>) =>
        patchHospital(id!, data),
      ...options,
    });

  const initFormValues = useCallback(() => {
    if (!hospitalData) {
      return;
    }

    const {
      id,
      name,
      tell,
      veterinarian_numbers,
      scale,
      is_cooperation,
      has_ct,
      has_mri,
      info_description,
      location: { zip_code, region, street_address, longitude, latitude },
      url: { homepage_url, blog_url, instagram_url, facebook_url, youtube_url },
    } = hospitalData.data.data;

    const initialValues = {
      id,
      name,
      tell,
      veterinarian_numbers,
      scale,
      is_cooperation,
      has_ct,
      has_mri,
      info_description,
      zip_code,
      region,
      street_address,
      longitude,
      latitude,
      homepage_url,
      blog_url,
      instagram_url,
      facebook_url,
      youtube_url,
    };

    form.setFieldsValue(initialValues);
  }, [form, hospitalData]);

  const handleFinish = (values: FormValues) => {
    if (id) {
      return patchHospitalMutate(values);
    }
    return postHospitalMutate(values);
  };

  useEffect(() => {
    form.resetFields();
    if (id) {
      initFormValues();
    }
  }, [form, id, initFormValues]);

  return (
    <Form form={form} onFinish={handleFinish}>
      <Default form={form} />
      <Categories />
      <Social />
      {type === 'edit' && <div>수정</div>}
      <SubmitButton isLoading={isPostPending || isPatchPending} />
    </Form>
  );
};

export default HospitalRegister;
