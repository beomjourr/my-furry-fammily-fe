export const aspectRatio = /(\d{1,4}):(\d{1,4})/;
export const name = /^[0-9a-zA-Z!_]{4,20}$/;
export const password = /^[0-9a-zA-Z!@#$%^&*()?+-_~=/]{6,20}$/;
export const phone = /^01([016789]?)([0-9]{3,4})([0-9]{4})$/;
export const tel = /^[0-9]{8,11}$/;
export const date = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
export const telWithDash = (str: string) =>
  str && str.replace(/(^02.{0}|^01.|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
