import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './presentation/ui-kit/button';

function onButtonClick() {
  console.log('success');
}

const root = createRoot(document.getElementById('app'));
root.render(<Button onClick={onButtonClick}>Кнопка React</Button>);
