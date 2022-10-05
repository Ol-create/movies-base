import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';

import Movies from './components/Movies';

const root = createRoot(document.getElementById('root'));
root.render(<Movies />);