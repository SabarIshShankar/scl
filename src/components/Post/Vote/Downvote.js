import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteDownvote = styled(PostVoteButton)`
  --iconColor: ${props =>
    props.didVote ? props.theme.downvote : props.theme.vote};

    ::after {
      width: 0; 
      height: 0; 
      border-left: 6px solid #262626;
      border-right: 6px solid #262626;
      
      border-top: 6px solid var(--iconColor);
    }
  }
`;

export default PostVoteDownvote;
