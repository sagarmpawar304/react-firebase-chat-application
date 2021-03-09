import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  items: string[];
  ParentComponent?: FC;
  renderItem: (item: any, index: number) => JSX.Element;
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 *
 * @param items - This should be array of keys or any
 * @param ParentComponent - This must be React function component.
 * @param renderItem - This must return a jSX Element
 */

const For = ({
  items,
  ParentComponent = (props: any) => <FlexContainer {...props} />,
  renderItem,
}: Props) => {
  const list = () =>
    items.map((item, index) => ({ ...renderItem(item, index), key: index }));
  const children = () => {
    return <ParentComponent>{list()}</ParentComponent>;
  };

  return (items || []).length ? children() : null;
};

export default For;
