import React from 'react';
import Avatar from './avtarProfile.styles';
import { getInitials } from '../../utils/helper';

const Avtarprofile = ({ name, ...props }: any) => {
  return (
    <Avatar {...props} className="img-fullsize font-huge">
      {getInitials(name)}
    </Avatar>
  );
};

export default Avtarprofile;
