import { useSuspenseQuery } from '@tanstack/react-query';
import BasicTable from '../../../../components/common/table/DefaultTable.tsx';
import { HospitalsCategoryQueryKey } from '../../../../constants/query-key.ts';
import { getHospitalsCategories } from '../../../../models/hopital-category/hopital-category.ts';

export default function Container() {
  const { data } = useSuspenseQuery({
    queryKey: [HospitalsCategoryQueryKey.hospitalsCategories],
    queryFn: getHospitalsCategories,
  });

  const columns = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '과목',
      dataIndex: 'description',
    },
  ];

  return (
    <BasicTable
      bordered
      rowKey="id"
      columns={columns}
      dataSource={data?.data.data}
      pagination={false}
    />
  );
}
