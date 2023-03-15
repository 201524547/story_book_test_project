import React from 'react';

import Button, { IButton } from './Button';

export default {
	title: 'Button',
	component: Button,
};

const Template = (args: IButton) => <Button {...args} />;

export const basicButton = Template.bind({});

export const disabledButton = Template.bind({});

basicButton.args = {
	width: '120px',
	height: '32px',

	label: 'basic button',

	disabled: false,
};

disabledButton.args = {
	width: '120px',
	height: '32px',

	label: 'disabled button',

	disabled: true,
};
