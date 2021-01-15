import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import {
	FeedComp,
	InputContainer,
	FeedInput,
	FeedForm,
	FeedFormInput,
	FeedButton,
	FeedOptions,
	OptionContainer,
} from './styled';
import FeedInputOptions from './FeedInputOptions';
import Post from './Post';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	return (
		<FeedComp>
			<InputContainer>
				<FeedInput>
					<CreateIcon />
					<FeedForm>
						<FeedFormInput type='text' placeholder='Start a post' />
						<FeedButton type='submit'>Send</FeedButton>
					</FeedForm>
				</FeedInput>
			</InputContainer>
			<OptionContainer>
				<FeedOptions>
					<FeedInputOptions Icon={ImageIcon} title='Photo' color='#357ded' />
					<FeedInputOptions
						Icon={VideoCallIcon}
						title='Video'
						color='#e7a33e'
					/>
					<FeedInputOptions
						Icon={EventNoteIcon}
						title='Event'
						color='#c0cbcd'
					/>
					<FeedInputOptions
						Icon={DescriptionIcon}
						title='Article'
						color='#7fc15e'
					/>
				</FeedOptions>
			</OptionContainer>

			{posts.map((post) => (
				<Post />
			))}

			<Post
				name='John doe'
				description='This is for testing'
				message='it worked!'
				photoUrl='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2240&q=80'
			/>
		</FeedComp>
	);
};

export default Feed;
