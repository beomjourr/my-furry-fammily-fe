import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${normalize}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src:
      local('Pretendard Black'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Black.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard ExtraBold'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-ExtraBold.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard Bold'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Bold.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard SemiBold'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-SemiBold.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard Medium'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Medium.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard Regular'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Regular.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:
      local('Pretendard Light'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Light.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src:
      local('Pretendard ExtraLight'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-ExtraLight.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src:
      local('Pretendard Thin'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Thin.woff') format('woff'),
      url('../../../../libs/design-system/fonts/pretendard-1.3.8/Pretendard-Thin.woff') format('woff');
  }

`;
