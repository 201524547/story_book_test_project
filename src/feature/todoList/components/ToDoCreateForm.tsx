import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../../../common/input/Input';
import Button from '../../../common/button/Button';

interface IToDoCreateForm {
	onSubmit: (newTask: string) => void;
}

const Container = styled.div`
	width: 100%;
	height: 160px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	padding: 0px 20px;
	margin-bottom: 12px;

	border: 1px solid #cdcdcd;
	border-radius: 16px;

	background-color: #ebeef1;
`;

function ToDoCreateForm({ onSubmit }: IToDoCreateForm) {
	const [newTask, setNewTask] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.target.value);
	};

	const handleSubmit = () => {
		if (newTask) {
			onSubmit(newTask);
			setNewTask('');
		}
	};

	return (
		<Container>
			<Input width={'280px'} value={newTask} onChange={onChange} />
			<Button width={'40px'} onClick={handleSubmit}>
				등록
			</Button>
		</Container>
	);
}

export default ToDoCreateForm;
