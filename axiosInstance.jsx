import axios from 'axios';
import https from 'https';

const instance = axios.create({
  // Disable SSL/TLS certificate validation
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

export default instance;
