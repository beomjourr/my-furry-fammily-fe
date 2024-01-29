import { Card, Form, Switch, TimePicker, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import ListCard from '../../../../components/common/listcard/ListCard.tsx';
import { postHospitalOperationTime } from '../../../../models/hospital-operation-time/hospital-operation-time.ts';
import SubmitButton from '../../../../components/common/button/SubmitButton.tsx';
import { HospitalResponseData } from '../../../../models/hospital/hospital-search.ts';

interface FormValues {
  date: {
    day_of_week_status: string;
    date: number[];
    is_day_off: boolean;
  }[];
}

interface OperationTimeProps {
  id?: string;
  hospitalData?: HospitalResponseData;
}

const DAY_OF_WEEK_STATUS = [
  {
    day_of_week_status: 'MONDAY',
  },
  {
    day_of_week_status: 'TUESDAY',
  },
  {
    day_of_week_status: 'WEDNESDAY',
  },
  {
    day_of_week_status: 'THURSDAY',
  },
  {
    day_of_week_status: 'FRIDAY',
  },
  {
    day_of_week_status: 'SATURDAY',
  },
  {
    day_of_week_status: 'SUNDAY',
  },
  {
    day_of_week_status: 'REST',
  },
];

export default function OperationTime({ id }: OperationTimeProps) {
  const [form] = useForm();

  const { mutate: postOperationTimeMutate, isPending } = useMutation({
    mutationFn: postHospitalOperationTime,
  });

  const handleFinish = (values: FormValues) => {
    const data = values.date.map((item) => {
      const startHour = dayjs(item.date[0]).hour();
      const startMinute = dayjs(item.date[0]).minute();
      const endHour = dayjs(item.date[1]).hour();
      const endMinute = dayjs(item.date[1]).minute();

      return {
        day_of_week_status: item.day_of_week_status,
        start_time: [startHour, startMinute],
        end_time: [endHour, endMinute],
        is_day_off: item.is_day_off,
      };
    });

    postOperationTimeMutate({
      id,
      data,
    });
  };

  return (
    <ListCard title="운영시간" show>
      <Form form={form} onFinish={handleFinish}>
        <Form.List name="date" initialValue={DAY_OF_WEEK_STATUS}>
          {(fields) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <Typography.Title level={5}>
                    {DAY_OF_WEEK_STATUS[key].day_of_week_status}
                  </Typography.Title>
                  <Form.Item
                    {...restField}
                    label="시간"
                    name={[name, 'date']}
                    rules={[
                      { required: true, message: '시간을 선택해주세요.' },
                    ]}
                  >
                    <TimePicker.RangePicker format="HH:mm" showSecond={false} />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    initialValue={false}
                    label="휴무여부"
                    name={[name, 'is_day_off']}
                  >
                    <Switch />
                  </Form.Item>
                </Card>
              ))}
            </>
          )}
        </Form.List>

        <SubmitButton isLoading={isPending} />
      </Form>
    </ListCard>
  );
}
