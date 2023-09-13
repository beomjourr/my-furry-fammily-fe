import React from 'react';
import classNames from 'classnames';
import styles from './Textarea.module.scss';

export interface TextareaProps {
  initialValue?: string;
  className?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export function Textarea(props: TextareaProps) {
  const { initialValue = '', placeholder = '', className, onChange } = props;
  return (
    <textarea
      className={classNames(styles.textarea, className)}
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={onChange}
    ></textarea>
  );
}

export default Textarea;
