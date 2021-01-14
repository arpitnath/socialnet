import styled from 'styled-components';

/**
 * @Header
 */
export const HeaderComp = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	/* background-color: #fff; */
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
		color: #f5f5f5;
	}
`;

export const TitleH3 = styled.h3`
	font-size: 12px;
	font-weight: 400;
`;

/**
 * @Sidebar
 */

export const SidebarComp = styled.div`
	position: sticky;
	top: 80px;
	margin-top: 5px;
	flex: 0.2;
	border-radius: 10px;
	text-align: center;
	height: fit-content;
	color: #f5f5f5;
`;

export const SidebarTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #616161;
	border-bottom: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #1a1c2f;
	padding-bottom: 10px;
`;

export const SidebarBottom = styled.div`
	text-align: left;
	padding: 10px;
	border: 1px solid #616161;
	border-radius: 5px;
	margin-top: 10px;
	background-color: #1a1c2f;
	font-weight: bold;
	font-size: 15px;
`;
export const SidebarStats = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	margin-bottom: 10px;
	background-color: #1a1c2f;
	border: 1px solid #616161;
`;

export const Paragraph = styled.p`
	color: #e0e0e0;
	font-size: 12px;
	font-weight: bold;
	opacity: 0.5;
`;
export const Stats = styled.div`
	margin-top: 10px;
`;
export const StatNum = styled.div`
	font-weight: bold;
	color: #85c5e5;
`;

export const BgImg = styled.img`
	margin-bottom: -20px;
	width: 100%;
	height: 80px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	object-fit: cover;
`;
export const SidebarTitle = styled.h2`
	font-size: 18px;
	color: #fafafa;
`;
export const SidebarSpan = styled.h4`
	font-size: 12px;
	color: #e0e0e0;
`;

export const Recent = styled.div`
	display: flex;
	font-size: 13px;
	color: #bdbdbd;
	font-weight: bold;
	cursor: pointer;
	padding: 5px;

	&:hover {
		background-color: #363a58;
		border-radius: 5px;
		cursor: pointer;
		color: black;
	}
`;
export const Span = styled.span`
	margin-right: 10px;
	margin-left: 5px;
`;
export const RecentP = styled.p``;

/**
 * @Feed
 */

export const FeedComp = styled.div`
	color: #efefef;
	flex: 0.6;
	margin: 0 20px;
	margin-top: 5px;
`;
export const InputContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding-bottom: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
	background-color: #1a1c2f;
	padding: 20px;
`;
export const FeedInput = styled.div`
	border: 1px solid #616161;
	border-radius: 30px;
	display: flex;
	padding: 10px;
	color: #616161;
	padding-left: 15px;
	width: 100%;
	/* margin-top: 20px; */
`;

export const FeedForm = styled.form`
	display: flex;
	width: 100%;
`;
export const FeedFormInput = styled.input`
	border: none;
	flex: 1;
	margin-left: 10px;
	outline-width: 0px;
	font-weight: 600;
	outline: none;
	border: none;
	background: none;
	color: white;
`;
export const FeedButton = styled.button`
	display: none;
`;

export const OptionContainer = styled.div`
	border-radius: 0 10px;
	/* margin-bottom: 20px; */
	margin-top: -50px;
	background-color: #1a1c2f;
	padding: 20px;
`;

export const FeedOptions = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

/**
 * @FeedInputOptions
 */

export const InputOptions = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	color: #e0e0e0;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: #363a58;
		border-radius: 5px;
	}
`;
