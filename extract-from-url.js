const url = 'https://youtube.com';

function domainName(url){
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }

  const hostname = new URL(url).hostname;
  const parts = hostname.replace(/^www\./, '').split('.');

  // Handles multi-part TLDs like .com.br, .co.uk, .co.gj
  return parts.length > 2
    ? parts[parts.length - 3]
    : parts[0];
}

module.exports = domainName;