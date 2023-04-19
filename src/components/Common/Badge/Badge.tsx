import React from 'react';

import './Badge.scss';

type Props = { value: string | number };

function Badge({ value }: Props) {
  return (
    <div className='badge' role='info'>
      {value}
    </div>
  );
}

export default Badge;
