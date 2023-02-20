import React, { useState } from 'react';
import styled from 'styled-components';

import { Task } from '../utils/toDoList.type';

import ToDoCreateForm from '../components/ToDoCreateForm';
import ToDoList from '../components/ToDoList';

const Container = styled.div`
	width: 400px;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	padding: 12px 8px;
	margin-right: auto;
	margin-left: auto;
`;

function ToDoListPage() {
	const [toDoList, setToDoList] = useState<Task[]>([]);

	const onAdd = (value: string) => {
		setToDoList([
			...toDoList,
			{ id: toDoList.length, value, isChecked: false },
		]);
	};

	const onCheck = (targetId: number) => {
		setToDoList(
			toDoList.map((task) => {
				if (task.id === targetId) {
					return {
						...task,
						isChecked: !task.isChecked,
					};
				} else {
					return task;
				}
			})
		);
	};

	const onModify = (targetId: number, value: string) => {
		setToDoList(
			toDoList.map((task) => {
				if (task.id === targetId) {
					return {
						...task,
						value,
					};
				} else {
					return task;
				}
			})
		);
	};

	const onDelete = (targetId: number) => {
		setToDoList(toDoList.filter(({ id }) => id !== targetId));
	};

	return (
		<Container>
			<ToDoCreateForm onSubmit={onAdd} />
			<ToDoList
				ToDoList={toDoList}
				onCheck={onCheck}
				onModify={onModify}
				onDelete={onDelete}
			/>
		</Container>
	);
}

export default ToDoListPage;
