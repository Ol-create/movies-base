import React, { Component, Fragment } from 'react'
import { createRoot } from 'react-dom/client';

import Pagenation from './components/common/Pagenation';
import Movies from './components/Movies';

const root = createRoot(document.getElementById('root'));
root.render(<Fragment>
    <Movies />
    </Fragment>);