'use client';

import { CloseButton, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { useAtom } from 'jotai';
import styles from '../../app/search/page.module.scss';
import { searchRecentStorage } from '../../store/search';

interface SearchRecentProps {
  setKeyword: (keyword: string) => void;
  searchRecentFocus: boolean;
  setSearchRecentFocus: (focus: boolean) => void;
}

export default function SearchRecent({
  setKeyword,
  searchRecentFocus,
  setSearchRecentFocus,
}: SearchRecentProps) {
  const [searchRecent, setSearchRecent] = useAtom(searchRecentStorage);

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
