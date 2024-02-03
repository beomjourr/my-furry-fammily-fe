'use client';

import { Button, useToast } from '@chakra-ui/react';

interface LocationButtonProps {
  street_address: string;
}

export default function LocationButton({
  street_address,
}: LocationButtonProps) {
  const toast = useToast();

  return (
    <Button
      color="#6282DB"
      fontSize="12px"
      padding="8px 10px"
      fontWeight="600"
      borderRadius="4px"
      background="#E6E9F9"
      onClick={() => {
        navigator.clipboard
          .writeText(street_address)
          .then(() => {
            toast({
              title: '클립보드에 복사되었습니다.',
              duration: 3000,
              variant: 'toast',
            });
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      }}
    >
      주소 복사
    </Button>
  );
}
