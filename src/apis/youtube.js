import axios from 'axios';

const KEY = 'AIzaSyDIELl5MszCIIezW1KXfwM4KbCa56KWw8w';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		max: 20,
		key: KEY
	}
});
