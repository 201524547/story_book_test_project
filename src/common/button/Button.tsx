import styled from 'styled-components';

interface IButton {
	width?: string;
	height?: string;
}

const Button = styled.button<IButton>`
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
`;

export default Button;
