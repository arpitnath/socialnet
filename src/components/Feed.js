import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import {
	FeedComp,
	InputContainer,
	FeedInput,
	FeedForm,
	FeedFormInput,
	FeedButton,
} from './styled';

const Feed = () => {
	return (
		<>
			<FeedComp>
				<InputContainer>
					<FeedInput>
						<CreateIcon />
						<FeedForm>
							<FeedFormInput type='text' />
							<FeedButton type='submit'>Send</FeedButton>
						</FeedForm>
					</FeedInput>
				</InputContainer>
			</FeedComp>
		</>
	);
};

export default Feed;
