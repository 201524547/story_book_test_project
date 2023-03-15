import styled from 'styled-components';
import React from 'react';

export interface IButton {
	width?: string;
	height?: string;

	label?: string;

	disabled?: boolean;

	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer = styled.button<IButton>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '32px')};

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	border: 1px solid #5d5d5d;
	border-radius: 4px;

	background-color: #fdfdfd;

	box-sizing: border-box;

	.disable {
	}
`;

const Button = ({ width, height, label, disabled, onClick }: IButton) => {
	return (
		<ButtonContainer
			width={width}
			height={height}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</ButtonContainer>
	);
};

export default Button;
