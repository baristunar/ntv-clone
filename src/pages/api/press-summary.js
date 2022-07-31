import axios from 'axios';
const htmlparser2 = require('htmlparser2');
import { API_URLS } from '../../constants/api-urls';

const fetchPressSummary = async (req, res) => {
  const response = await axios.get(API_URLS.pressSummary);
  const parsedData = await htmlparser2.parseFeed(response.data);

  res.status(200).json(parsedData);
};

export default fetchPressSummary;
