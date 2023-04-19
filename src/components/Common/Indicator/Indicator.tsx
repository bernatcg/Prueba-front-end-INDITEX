import React from 'react';

type Props = { busy: boolean };
import './Indicator.scss';

export default function Indicator({ busy }: Props) {
  return (
    <div className='indicator'>
      <div
        className={`indicator__dot ${busy ? 'indicator__dot--busy' : ''}`}
      ></div>
    </div>
  );
}
