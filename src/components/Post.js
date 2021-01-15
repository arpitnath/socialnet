import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import {
	PostComp,
	PostHeader,
	PostInfo,
	PostH2,
	PostDesc,
	PostBody,
	PostButtons,
} from './styled';
import InputOptions from './FeedInputOptions';

const Post = ({ name, description, message, photoUrl }) => {
	return (
		<PostComp>
			<PostHeader>
				<Avatar />
				<PostInfo>
					<PostH2>{name}</PostH2>
					<PostDesc>{description}</PostDesc>
				</PostInfo>
			</PostHeader>

			<PostBody>
				<p>{message}</p>
			</PostBody>

			<PostButtons>
				<InputOptions Icon={ThumbUpAltIcon} title='Like' color='#e0e0e0' />
				<InputOptions Icon={CommentIcon} title='Comment' color='#e0e0e0' />
				<InputOptions Icon={ShareIcon} title='Share' color='#e0e0e0' />
				<InputOptions Icon={SendIcon} title='Send' color='#e0e0e0' />
			</PostButtons>
		</PostComp>
	);
};

export default Post;
