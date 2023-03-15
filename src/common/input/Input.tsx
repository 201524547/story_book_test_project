import styled from 'styled-components';

interface IInput {
	width?: string;
	height?: string;
}

const Input = styled.input<IInput>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '32px')};

	padding: 2px 8px;

	border: 1px solid #3c3c3c;
	border-radius: 4px;

	box-sizing: border-box;

	&:focus {
		outline: 1px solid #3c3c3c;
	}
`;

export default Input;
