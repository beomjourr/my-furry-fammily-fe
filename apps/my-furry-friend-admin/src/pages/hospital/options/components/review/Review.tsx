import { useMutation, useQuery } from '@tanstack/react-query';
import { App, Button, Popconfirm } from 'antd';
import { useState } from 'react';
import ListCard from '../../../../../components/common/listcard/ListCard.tsx';
import BasicTable from '../../../../../components/common/table/DefaultTable.tsx';
import { HospitalReviewQueryKey } from '../../../../../constants/query-key.ts';
import {
  deleteHospitalReview,
  getHospitalReview,
  ReviewContent,
} from '../../../../../models/hospital-review/hospital-review.ts';
import { queryClient } from '../../../../../main.tsx';
import ReviewModal from './ReviewModal.tsx';
import ReviewRatingModal from './ReviewRatingModal.tsx';

interface ReviewProps {
  id?: string;
}

export default function Review({ id }: ReviewProps) {
  const { message } = App.useApp();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    record?: ReviewContent;
    type?: 'create' | 'edit';
  }>({ isOpen: false });

  const [ratingModalState, setRatingModalState] = useState<{
    isOpen: boolean;
  }>({ isOpen: false });

  const { data: reviewData } = useQuery({
    queryKey: [HospitalReviewQueryKey.hospitalReview, id],
    queryFn: () =>
      getHospitalReview({
        animalHospitalId: id!,
      }),
    enabled: !!id,
  });

  const { mutate: deleteHospitalReviewMutate } = useMutation({
    mutationFn: deleteHospitalReview,
  });

  const columns = [
    { title: 'id', dataIndex: 'id' },
    { title: '내용', dataIndex: 'content' },
    { title: '타입', dataIndex: 'origin_type' },
    { title: '방문객수', dataIndex: 'number_of_visits' },
    {
      title: '수정',
      dataIndex: 'id',
      render: (value: number) => {
        return (
          <Button
            onClick={() =>
              setModalState({
                isOpen: true,
                record: reviewData?.data.data.content.find(
                  (review) => review.id === value,
                ),
                type: 'edit',
              })
            }
          >
            수정
          </Button>
        );
      },
    },
    {
      title: '삭제',
      dataIndex: 'id',
      render: (value: number) => {
        return (
          <Popconfirm
            title="리뷰 삭제"
            description="리뷰를 삭제하시겠습니까?"
            okText="삭제"
            cancelText="취소"
            onConfirm={() => {
              deleteHospitalReviewMutate(value, {
                onSuccess: () => {
                  message.success('성공적으로 처리되었습니다.');
                  queryClient.invalidateQueries({
                    queryKey: [HospitalReviewQueryKey.hospitalReview, id],
                  });
                },
                onError: () => {
                  message.error('오류가 발생했습니다.');
                },
              });
            }}
          >
            <Button danger>삭제</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <ListCard title="리뷰" show>
      <BasicTable
        topButtons={[
          <Button
            key="review-create-button"
            onClick={() =>
              setModalState({
                isOpen: true,
                type: 'create',
              })
            }
          >
            추가
          </Button>,
          <Button
            key="review-rating-button"
            onClick={() =>
              setRatingModalState({
                isOpen: true,
              })
            }
          >
            별점 수정
          </Button>,
        ]}
        bordered
        rowKey="id"
        columns={columns}
        dataSource={reviewData?.data.data.content}
        pagination={false}
      />

      <ReviewModal
        {...modalState}
        id={id}
        onCancel={() =>
          setModalState({
            isOpen: false,
          })
        }
      />

      <ReviewRatingModal
        {...ratingModalState}
        id={id}
        onCancel={() =>
          setRatingModalState({
            isOpen: false,
          })
        }
      />
    </ListCard>
  );
}
