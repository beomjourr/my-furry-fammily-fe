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

  console.log(selectedFilter);
  console.log(searchFilter);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent position="absolute" bottom={0}>
        <ModalHeader>header</ModalHeader>
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
                    <Checkbox iconColor="#6282DB" iconSize="16px">
                      Checkbox
                    </Checkbox>
                    <Checkbox iconColor="#6282DB" iconSize="16px">
                      Checkbox
                    </Checkbox>
                    <Checkbox iconColor="#6282DB" iconSize="16px">
                      Checkbox
                    </Checkbox>
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
