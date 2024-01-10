import * as regex from './regex';

export default function () {
  return {
    required: [{ required: true, message: '필수 정보입니다.' }],
    name: [
      {
        pattern: regex.name,
        message: '정확한 이름을 입력해주세요.',
      },
    ],
    password: [
      {
        pattern: regex.password,
        message: '비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
      },
    ],
    tel: [
      {
        pattern: regex.tel,
        message: '정확한 전화번호를 입력해주세요',
      },
    ],
    phone: [
      {
        pattern: regex.phone,
        message: '정확한 휴대폰 번호를 입력해주세요',
      },
    ],
    aspectRatio: [
      {
        pattern: regex.aspectRatio,
        message: '정확한 비율을 입력해주세요',
      },
    ],
  };
}
