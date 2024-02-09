import { CloseButton, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { useAtom, useSetAtom } from 'jotai';
import styles from '../../app/search/page.module.scss';
import {
  searchKeyword,
  searchRecentFocusState,
  searchRecentStorage,
} from '../../store/search';

export default function SearchRecent() {
  const [searchRecent, setSearchRecent] = useAtom(searchRecentStorage);
  const [searchRecentFocus, setSearchRecentFocus] = useAtom(
    searchRecentFocusState,
  );
  const setKeyword = useSetAtom(searchKeyword);

  return (
    <>
      {searchRecentFocus && (
        <div className={styles.search_recent}>
          <div className={styles.search_recent_title}>
            <h2>최근 검색어</h2>
            <CloseButton onClick={() => setSearchRecentFocus(false)} />
          </div>
          <div className={styles.search_recent_list}>
            {searchRecent?.map((item, index) => (
              <Tag
                key={`${item}-${index}`}
                role="button"
                className={styles.search_recent_item}
                onClick={() => {
                  setKeyword(item);
                  setSearchRecentFocus(false);
                }}
              >
                <TagLabel>{item}</TagLabel>
                <TagCloseButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchRecent((prev) => prev.filter((i) => i !== item));
                  }}
                />
              </Tag>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
