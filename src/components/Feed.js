import React from 'react';
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

const Feed = () => {
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
		</FeedComp>
	);
};

export default Feed;

/**
 * <InputContainer>
				<FeedInput>
					<CreateIcon />
					<FeedForm>
						<FeedFormInput type='text' placeholder='Start a post' />
						<FeedButton type='submit'>Send</FeedButton>
					</FeedForm>
				</FeedInput>

				<FeedOptions>
					<FeedInputOptions Icon={ImageIcon} title='Photo' color='#357ded' />
				</FeedOptions>
			</InputContainer>
 */
