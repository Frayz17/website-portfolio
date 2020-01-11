import { createGlobalStyle } from 'styled-components';
import notoSerif from 'static/fonts/NotoSerif-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @import url(${notoSerif});
`;

export default GlobalStyle;
