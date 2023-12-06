import React from 'react';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { useAtom } from 'jotai';
import { CloseIcon } from '@chakra-ui/icons';
import { searchCategories } from '../../service/categories';
import { searchScales } from '../../service/scales';
import styles from '../../app/search/page.module.scss';
import { search } from '../../store/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilter: { key: string; value: string };
}

function SearchModal({ isOpen, onClose, selectedFilter }: SearchModalProps) {
  const [searchFilter, setSearchFilter] = useAtom(search);

  const { data, isLoading } = useSWR(
    `/animal-hospitals/${selectedFilter.key}`,
    (key) => {
      switch (selectedFilter.key) {
        case 'regions':
          return;
        case 'categories':
          return searchCategories(key);
        case 'scales':
          return searchScales(key);
        default:
      }
    },
  );

  console.log('selectedFilter', selectedFilter);
  console.log('searchFilter', searchFilter);

  console.log('ob', searchFilter[selectedFilter.key]);

  const handleCheckboxChange = (value: string) => {
    if (searchFilter[selectedFilter.key]?.includes(value)) {
      setSearchFilter((prev) => ({
        ...prev,
        [selectedFilter.key]: prev[selectedFilter.key].filter(
          (item) => item !== value,
        ),
      }));
    } else {
      setSearchFilter((prev) => ({
        ...prev,
        [selectedFilter.key]: [...prev[selectedFilter.key], value],
      }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent position="absolute" bottom={0}>
        <ModalHeader>
          <div className={styles.modal_header}>
            {searchFilter[selectedFilter.key]?.map((item) => (
              <Button
                key={item}
                backgroundColor="#F5F5F7"
                fontSize="12px"
                height="32px"
                borderRadius="16px"
                rightIcon={
                  <CloseIcon color="#9A9AA1" width="12px" height="12px" />
                }
                onClick={() => {
                  handleCheckboxChange(item);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </ModalHeader>
        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="0"
          textAlign="center"
        >
          <div className={styles.modal_body}>
            <div className={styles.modal_body_content}>
              <div className={styles.modal_body_title}>
                <Button className={styles.modal_body_title_text}>
                  {selectedFilter.value}별
                </Button>
              </div>

              <div className={styles.modal_body_checkbox}>
                <CheckboxGroup>
                  <Stack spacing="20px">
                    {data?.data?.data?.scales?.map((item: string) => (
                      <Checkbox
                        key={item}
                        checked={
                          // searchFilter[selectedFilter.key]?.includes(item)
                        }
                        iconColor="#6282DB"
                        iconSize="16px"
                        value={item}
                        onChange={(e) => {
                          handleCheckboxChange(e.target.value);
                        }}
                      >
                        {item}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              padding: '0 16px',
            }}
          >
            <Button
              w="100%"
              h="48px"
              borderRadius="24px"
              backgroundColor="#6282DB"
              color="#ffffff"
            >
              선택 완료
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;
