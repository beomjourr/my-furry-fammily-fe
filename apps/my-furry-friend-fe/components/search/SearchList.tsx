import React from 'react';
import { groupBy } from 'lodash';
import SearchCard from './SearchCard';
import { HospitalResponse } from '../../service/search';
import styles from '../../app/search/page.module.scss';

interface SearchListProps {
  hospitalData?: HospitalResponse[];
}

interface SearchListCardWrapperProps {
  title: string;
  hospitalData?: HospitalResponse[];
}

function SearchListCardWrapper({
  title,
  hospitalData,
}: SearchListCardWrapperProps) {
  return (
    <>
      <div className={styles.search_list_title}>{title}</div>
      {hospitalData?.map((data) => <SearchCard key={data.id} data={data} />)}
    </>
  );
}

function SearchList({ hospitalData }: SearchListProps) {
  const hospitalGroupBy = groupBy(hospitalData, 'is_cooperation');

  return (
    <div>
      {hospitalGroupBy.true?.length > 0 && (
        <SearchListCardWrapper
          title="내새꾸 추천병원"
          hospitalData={hospitalGroupBy.true}
        />
      )}
      {hospitalGroupBy.false?.length > 0 && (
        <SearchListCardWrapper
          title="진료비 공개병원"
          hospitalData={hospitalGroupBy.false}
        />
      )}
    </div>
  );
}

export default SearchList;
