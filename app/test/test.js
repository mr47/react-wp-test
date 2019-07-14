import React from 'react';
import './test.scss';

import img from './test.jpg';

export default () =>
    <div>
        <h1 className={'test'}>
            Hello world
        </h1>
        <img src={img} alt={'test'}/>
    </div>
