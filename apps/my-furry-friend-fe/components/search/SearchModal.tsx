import React from 'react';
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { useAtom } from 'jotai';
import { CloseIcon } from '@chakra-ui/icons';
import { searchCategories } from '../../service/categories';
import { searchScales } from '../../service/scales';
import styles from '../../app/search/page.module.scss';
import { Search, search } from '../../store/search';
import { searchRegions } from '../../service/regions';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilter: { key: string; value: string };
}

function SearchModal({ isOpen, onClose, selectedFilter }: SearchModalProps) {
  const [, setSearchFilter] = useAtom(search);
  const [localSearchFilter, setLocalSearchFilter] = React.useState<Search>({
    regions: [],
    categories: [],
    values: [],
  });

  const selectedFilterName = React.useMemo(() => {
    switch (selectedFilter.key) {
      case 'regions':
        return '지역';
      case 'categories':
        return '진료';
      case 'values':
        return '규모';
      default:
        return '';
    }
  }, [selectedFilter.key]);

  const { data, isLoading } = useSWR(
    `/animal-hospitals/${selectedFilter.key}`,
    () => {
      switch (selectedFilter.key) {
        case 'regions':
          return searchRegions();
        case 'categories':
          return searchCategories();
        case 'values':
          return searchScales();
        default:
      }
    },
  );

  const allChecked = data?.data?.data?.every(
    (item: { key: string; value: string }) =>
      localSearchFilter[selectedFilter.key]?.some(
        (filter) => filter.key === item.key,
      ),
  );

  const handleSelectClick = () => {
    setSearchFilter(localSearchFilter);
    onClose();
  };

  const handleCheckboxChange = (value: { key: string; value: string }) => {
    if (
      localSearchFilter[selectedFilter.key]?.some(
        (filter) => filter.key === value.key,
      )
    ) {
      setLocalSearchFilter((prev) => ({
        ...prev,
        [selectedFilter.key]: prev[selectedFilter.key].filter(
          (item) => item.key !== value.key,
        ),
      }));
    } else {
      setLocalSearchFilter((prev) => ({
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
            {localSearchFilter[selectedFilter.key]?.map((item) => (
              <Button
                key={item.key}
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
                {item.value}
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
                <Stack spacing="20px">
                  {isLoading && (
                    <Stack>
                      {Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton key={index} height="20px" />
                      ))}
                    </Stack>
                  )}
                  <Checkbox
                    iconColor="#6282DB"
                    iconSize="16px"
                    isChecked={allChecked}
                    onChange={(e) =>
                      setLocalSearchFilter((prev) => ({
                        ...prev,
                        [selectedFilter.key]: e.target.checked
                          ? data?.data?.data
                          : [],
                      }))
                    }
                  >
                    전체보기
                  </Checkbox>
                  {data?.data?.data?.map(
                    (item: { key: string; value: string }) => (
                      <Checkbox
                        key={item.key}
                        isChecked={localSearchFilter[selectedFilter.key]?.some(
                          (filter) => filter.key === item.key,
                        )}
                        iconColor="#6282DB"
                        iconSize="16px"
                        value={item.key}
                        onChange={() => {
                          handleCheckboxChange(item);
                        }}
                      >
                        {item.value}
                      </Checkbox>
                    ),
                  )}
                </Stack>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px',
            }}
          >
            <Button
              w="100%"
              h="48px"
              borderRadius="24px"
              backgroundColor="#6282DB"
              color="#ffffff"
              onClick={handleSelectClick}
            >
              {`${selectedFilterName} 선택 완료`}
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;
