import styled from 'styled-components';

/**
 * @Header
 */
export const HeaderComp = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-evenly;
	border-bottom: 0.1px solid #424242;
	padding-top: 3px;
	padding-bottom: 3px;
	width: 100%;
	z-index: 999;
`;

export const HeaderLeft = styled.div`
	display: flex;
`;
export const HeaderRight = styled.div`
	display: flex;
`;

export const Image = styled.img`
	object-fit: contain;
	height: 40px;
	margin-right: 3px;
`;

export const HeaderSearch = styled.div`
	padding: 10px;
	margin-top: 3px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	height: 22px;
	color: gray;
	background-color: #eef3f8;
`;

export const SerachInput = styled.input`
	outline: none;
	border: none;
	background: none;
`;

export const Options = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	padding: 5px;
	color: #e0e0e0;
	cursor: pointer;

	&:hover {
		color: #efefef;
	}
`;

export const TitleH3 = styled.h3`
	font-size: 12px;
	font-weight: 400;
`;

export const Avatar = styled.img`
	object-fit: contain;
	height: 40px;
	margin-top: -7px;
`;
