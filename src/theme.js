const constants = {
  error: '#f5222d',
  vote: '#b6b6b6',
  upvote: '#9700ff',
  downvote: '#2e70ff'
};

const dark = {
  ...constants,
  normalText: '#ffffff',
  mutedText: '#b0b8bf',
  border: 'transparent',
  accent: '#9700ff',
  pageBackground: '#1b1b1b',
  voteButtonHover: '#383838',
  foreground: '#262626',
  activeBackground: '#333333',
  inputBackground: '#212121',
  shadow: 'rgba(0, 0, 0, 0.4)'
};

const light = {
  ...constants,
  normalText: '#ffffff',
  mutedText: '#b0b8bf',
  border: 'transparent',
  accent: '#bd00ff',
  pageBackground: '#1b1b1b',
  voteButtonHover: '#383838',
  foreground: '#262626',
  activeBackground: '#333333',
  inputBackground: '#212121',
  shadow: 'rgba(0, 0, 0, 0.4)'
};

const theme = isDark => (isDark ? dark : light);

export default theme;
