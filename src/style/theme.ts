import { css } from 'styled-components';

const flexSpaceBetween = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const flexAlignItemsCenter = css`
  display: flex;
  align-items: center;
`;

const flexJustifyContentCenter = css`
  display: flex;
  justify-content: center;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const Theme = {
  color: {
    mono: {
      white: '#fff',
      gray010: '#F2F4F7',
      gray020: '#D8DBDF',
      gray030: '#939393',
      gray040: '#797A84',
      gray050: '#4B4B53',
      black: '#030A22',
    },
    primary: {
      p010: '#E7F7FF',
      p020: '#BBE5FD',
      p030: '#74C9F8',
      p040: '#0DA3F8',
      p050: '#226FB7',
      p060: '#093D6C',
    },
    secondary: {
      s010: '#F9B146', // 제이미가 이름을 안달아놔서 임시로 s010
    },
    alert: {
      default: '#F33636',
    },
  },
  fontSize: {
    L: '1.3125rem', // 21px
    M: '1.2rem', // 18px
    SM: '1rem', // 16px
    S: '0.875rem', // 14px
    XS: '0.75rem', // 12px
  },
  layout: {
    flexColumn: `${flexColumn}`,
    flexCenter: `${flexCenter}`,
    flexAlignItemsCenter: `${flexAlignItemsCenter}`,
    flexJustifyContentCenter: `${flexJustifyContentCenter}`,
    flexSpaceBetween: `${flexSpaceBetween}`,
  },
  padding: {
    L: '8px 16px',
    S: '4px 8px',
  },
  // border: {
  //   radius: {
  //     XL: '2rem', // 30px
  //     L: '1.25rem', // 20px
  //     M: '1rem', // 16px
  //     S: '0.7rem', // 11px
  //   },
  // },
  // fontFamily: 'Noto Sans KR',
  // fontWeight: {
  //   normal: '400',
  //   bold: '700',
  //   bold2: '900',
  // },
};

export { Theme };
