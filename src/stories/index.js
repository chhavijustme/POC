import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';

import ButtonType from '../components/buttons/ButtonType.js'
import ButtonSize from '../components/buttons/ButtonSize.js'
import ButtonBlock from '../components/buttons/ButtonBlock.js'
import ButtonState from '../components/buttons/ButtonState.js'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module)
.add('ButtonType',
  withInfo('Buttons are used to initialize an action, either in the background or foreground of an experience. Modify the color of the button wrt to its context by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. The example below shows Primary Button component .') 
    (() => <ButtonType onClick={action('clicked')}></ButtonType>))

.add('ButtonSize', 
  withInfo('Use appropriate button sized according to the context.')
    (() => <ButtonSize onClick={action('clicked')}></ButtonSize>))

.add('ButtonBlock', 
  withInfo('')
    (() => <ButtonBlock onClick={action('clicked')}></ButtonBlock>))

.add('ButtonState', 
  withInfo('Disabled Buttons may be used when the user cannot proceed until input is collected.')
    (() => <ButtonState onClick={action('clicked')}></ButtonState>));


  


