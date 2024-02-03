import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import clock from '@my-furry-family/images/clock.svg';

interface OperatingTimesProps {
  operating_times: {
    now_operation_status: string;
    today_operating_time: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
      is_today: boolean;
    };
    operating_times: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
    }[];
    resting_time: {
      day_of_week: string;
      start_time: number[];
      end_time: number[];
      is_day_off: boolean;
      is_today: boolean;
    };
  };
}

export default function OperatingTimes({
  operating_times,
}: OperatingTimesProps) {
  return (
    <AccordionItem
      background="#F5F5F7"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      gap="12px"
      padding="16px"
      border="none"
      borderRadius="8px"
      margin="0 0 16px 0"
    >
      <AccordionButton
        borderRadius="10px"
        padding="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
        _hover={{ background: 'none' }}
      >
        <Flex
          as="span"
          flex="1"
          textAlign="left"
          gap="10px"
          fontSize="14px"
          fontWeight="500"
        >
          <Image src={clock} alt="clock" />
          <span style={{ color: '#6282DB', fontSize: 14 }}>
            {operating_times?.now_operation_status}
          </span>
          <span style={{ fontWeight: 500 }}>
            {`${operating_times?.today_operating_time?.day_of_week || ''}
                  ${
                    operating_times?.today_operating_time?.start_time || ''
                  } - ${operating_times?.today_operating_time?.end_time || ''}
                `}
          </span>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel padding="0">
        {operating_times?.resting_time && (
          <Box
            display="flex"
            padding="6px 8px"
            justifyContent="center"
            alignItems="center"
            gap="4px"
            color="#6282DB"
            background="#E6E9F9"
            fontSize="14px"
            fontWeight="500"
          >
            {`휴게시간 ${operating_times?.resting_time?.start_time || ''} - ${
              operating_times?.resting_time?.end_time || ''
            }`}
          </Box>
        )}
        <UnorderedList
          m="1"
          listStyleType="none"
          mt="10px"
          spacing={1}
          fontSize={14}
          fontWeight={500}
          color="#545459"
        >
          {operating_times?.operating_times?.map((item, index) => {
            return (
              <ListItem key={index}>
                {`${item?.day_of_week || ''} ${item?.start_time || ''} - ${
                  item?.end_time || ''
                }`}
              </ListItem>
            );
          })}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
}
