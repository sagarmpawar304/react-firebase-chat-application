import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: orange;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 320px;
  padding: 1rem;
  h1 {
    margin-bottom: 0 !important;
  }
  .nav-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .ant-badge {
    padding: 0 0.5rem;
  }

  .anticon {
    font-size: 1.7rem;
  }
`;

export default NavbarWrapper;
