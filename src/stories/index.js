import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import ButtonWarning from '../components/buttons/ButtonWarning.js'
import ButtonDanger from '../components/buttons/ButtonDanger.js'
import ButtonDefault from '../components/buttons/ButtonDefault.js'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module)
.add('ButtonDefault',
  withInfo('All action buttons') 
    (() => <ButtonDefault onClick={action('clicked')}></ButtonDefault>))

.add('ButtonWarning', 
  withInfo('To be used to indicate warnings')
    (() => <ButtonWarning onClick={action('clicked')}></ButtonWarning>))

.add('ButtonDanger', 
  withInfo('To be used for Delete')
    (() => <ButtonDanger onClick={action('clicked')}></ButtonDanger>));


  


