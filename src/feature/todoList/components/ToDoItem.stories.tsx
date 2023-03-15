import React from 'react';

import ToDoItem, { ITodoItem } from './ToDoItem';

export default {
	title: 'ToDoItem',
	component: ToDoItem,
};

const Template = (args: ITodoItem) => <ToDoItem {...args} />;

export const basicToDoItem = Template.bind({});

export const checkedToDoItem = Template.bind({});

basicToDoItem.args = {
	task: {
		id: 0,
		value: 'Basic Todo Item Test',
		isChecked: false,
	},

	onDelete: () => null,
	onModify: () => null,
	onCheck: () => null,
};

checkedToDoItem.args = {
	task: {
		id: 1,
		value: 'Checked Todo Item Test',
		isChecked: true,
	},

	onDelete: () => null,
	onModify: () => null,
	onCheck: () => null,
};
