import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteUpvote = styled(PostVoteButton)`
  --iconColor: ${props =>
    props.didVote ? props.theme.upvote : props.theme.vote};

  ::after {

    
  width: 0; 
  height: 0; 
  border-left: 6px solid #262626;
  border-right: 6px solid #262626;
  
  border-bottom: 6px solid var(--iconColor);
  }
`;

export default PostVoteUpvote;
