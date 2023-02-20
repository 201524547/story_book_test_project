import React from 'react';
import styled from 'styled-components';

import { Task } from '../utils/toDoList.type';

import ToDoItem from './ToDoItem';

interface IToDoList {
	ToDoList: Task[];

	onCheck: (id: number) => void;
	onModify: (id: number, value: string) => void;
	onDelete: (id: number) => void;
}

const Container = styled.div`
	width: 100%;
	min-height: 1000px;
	max-height: 1000px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	padding: 8px 20px;

	border: 1px solid #cdcdcd;
	border-radius: 16px;

	background-color: #ebeef1;

	overflow-y: scroll;
`;

function ToDoList({ ToDoList, onCheck, onModify, onDelete }: IToDoList) {
	return (
		<Container>
			{ToDoList.map((task) => (
				<ToDoItem
					key={task.id}
					task={task}
					onDelete={() => onDelete(task.id)}
					onModify={(value) => onModify(task.id, value)}
					onCheck={() => onCheck(task.id)}
				/>
			))}
		</Container>
	);
}

export default ToDoList;
