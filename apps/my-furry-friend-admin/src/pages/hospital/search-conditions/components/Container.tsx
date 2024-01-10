import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Segmented } from 'antd';
import { QueryKey } from '../../../../constants/query-key.ts';
import { getHospitalSearchConditions } from '../../../../models/hospital/hospital-search.ts';
import BasicTable from '../../../../components/common/table/DefaultTable.tsx';

const Container = () => {
  const [selected, setSelected] = useState<string | number>('categories');
  const { data } = useSuspenseQuery({
    queryKey: [QueryKey.hospitalSearchConditions],
    queryFn: () => getHospitalSearchConditions(),
    select: ({ data }) => data?.data,
  });

  const columns = [
    {
      key: 'key',
      title: 'key',
      dataIndex: 'key',
    },
    {
      key: 'value',
      title: 'value',
      dataIndex: 'value',
    },
  ];

  return (
    <BasicTable
      topButtons={[
        <Segmented
          key="segmented"
          options={Object.keys(data ?? {}).map((key) => key)}
          value={selected}
          onChange={(value) => setSelected(value)}
        />,
      ]}
      columns={columns}
      dataSource={(data as never)?.[selected] ?? []}
      pagination={false}
    />
  );
};

export default Container;
