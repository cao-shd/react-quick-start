import React from 'react';
import ReactDOM from 'react-dom';

import XDataList from '@/components/XDataList/XDataList'
import XInput from '@/components/XInput/XInput'

ReactDOM.render(
    <div>
        <XInput></XInput>
        <hr />
        <XDataList></XDataList>
    </div>,
    document.getElementById('app')
)