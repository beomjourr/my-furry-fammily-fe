import ListCard from '../../../../components/common/listcard/ListCard.tsx';

interface ReviewProps {
  id?: string;
}

export default function Review({ id }: ReviewProps) {
  return <ListCard title="리뷰" show />;
}
