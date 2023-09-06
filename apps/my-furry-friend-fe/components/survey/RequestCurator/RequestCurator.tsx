'use client';

import { Textarea } from '@my-furry-family/next-ui-component';
import { useSetAtom } from 'jotai';
import { requestCuratorData } from '../../../store/survey';
import styles from './RequestCurator.module.scss';
import { SubmitSurvey } from '../SubmitSurvey/SubmitSurvey';

export function RequestCurator() {
  const setValue = useSetAtom(requestCuratorData);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        내새꾸 전담 큐레이터에게 <br />
        요청하고 싶은 사항이 있나요?
      </p>
      <Textarea placeholder="내용을 입력해주세요." onChange={handleChange} />
      <SubmitSurvey />
    </div>
  );
}
