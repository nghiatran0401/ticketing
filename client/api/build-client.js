import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // On the server
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local', // for cross namespace service communication
      headers: req.headers, // including the host & the cookie
    });
  } else {
    // On the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default buildClient;
