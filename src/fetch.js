import nodefetch from 'node-fetch';

const defaultUserAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36';

export default function fetch(url, args = {}) {
  args.headers = args.headers || {};
  args.headers['user-agent'] = args.headers['user-agent'] || defaultUserAgent;
  return nodefetch(url, args);
}
