import React from 'react';
import Avatar from './avtarProfile.styles';
import { getInitials } from '../../utils/helper';

const Avtarprofile = ({ name, ...props }: any) => {
  return (
    <Avatar {...props} className="width-200 height-200 img-fullsize font-huge">
      {getInitials(name)}
    </Avatar>
  );
};

export default Avtarprofile;
