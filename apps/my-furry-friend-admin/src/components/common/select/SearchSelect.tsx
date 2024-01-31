import { Select } from 'antd';

interface SearchSelectProps {
  data?: { label: string; value: string }[];
}

export default function SearchSelect({
  data = [],
  ...rest
}: SearchSelectProps) {
  return (
    <Select
      showSearch
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={data}
      {...rest}
    />
  );
}
