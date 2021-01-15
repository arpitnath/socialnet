import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
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
import { db } from '../firebase';

const Feed = () => {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('post').onSnapshot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('post').add({
			name: 'John doe',
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	return (
		<FeedComp>
			<InputContainer>
				<FeedInput>
					<CreateIcon />
					<FeedForm>
						<FeedFormInput
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type='text'
							placeholder='Start a post'
						/>
						<FeedButton onClick={sendPost} type='submit'>
							Send
						</FeedButton>
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

			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</FeedComp>
	);
};

export default Feed;
