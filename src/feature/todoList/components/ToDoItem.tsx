import React, { useState } from 'react';
import styled from 'styled-components';

import { Task } from '../utils/toDoList.type';

import Input from '../../../common/input/Input';
import Button from '../../../common/button/Button';

export interface ITodoItem {
	task: Task;

	onDelete: () => void;
	onModify: (newTask: string) => void;
	onCheck: () => void;
}

const Container = styled.div`
	width: 90%;
	height: 120px;
	min-height: 120px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	margin-bottom: 12px;
	padding: 8px 12px;

	border: 1px solid #cdcdcd;
	border-radius: 8px;

	background: rgba(52, 60, 234, 0.08);
`;

const Header = styled.div`
	width: 100%;
	height: 20px;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Value = styled.div<{ isChecked: boolean }>`
	width: 100%;
	height: 32px;

	text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};

	font-size: 24px;
`;

const Footer = styled.div`
	width: 100%;
	height: 40px;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	padding: 4px;
`;

const ButtonSection = styled.div`
	width: 100px;
	height: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

function ToDoItem({ task, onDelete, onCheck, onModify }: ITodoItem) {
	const [newTask, setNewTask] = useState<string>(task.value);
	const [isModify, setIsModify] = useState<boolean>(false);

	const onModifyButtonClick = () => {
		if (isModify) {
			onModify(newTask);
			setIsModify(false);
		} else {
			setIsModify(true);
		}
	};

	const onDeleteButtonClick = () => {
		if (isModify) {
			setIsModify(false);
		} else {
			onDelete();
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.target.value);
	};

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		onCheck();
	};

	return (
		<Container>
			<Header>
				<div onClick={onDelete}>X</div>
			</Header>
			<Content>
				{isModify ? (
					<Input height={'24px'} value={newTask} onChange={onChange} />
				) : (
					<>
						<Value isChecked={task.isChecked}>{task.value}</Value>
						<input
							type={'checkbox'}
							checked={task.isChecked}
							onChange={handleCheck}
						/>
					</>
				)}
			</Content>
			<Footer>
				<ButtonSection>
					<Button
						width={'44px'}
						label={isModify ? '확인' : '수정'}
						onClick={onModifyButtonClick}
					/>
					<Button
						width={'44px'}
						label={isModify ? '취소' : '삭제'}
						onClick={onDeleteButtonClick}
					/>
				</ButtonSection>
			</Footer>
		</Container>
	);
}

export default ToDoItem;
