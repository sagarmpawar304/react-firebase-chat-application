import styled from 'styled-components';
import media from '../../theme/media';
import Title from 'antd/lib/typography/Title';

export default styled(Title)`
  ${media.smallMobile.max(`font-size: 2em !important;`)}
`;
