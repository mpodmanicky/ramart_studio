const https = require('https');

async function fetchPage(url) {
  return new Promise((resolve) => {
    https.get('https://www.ramartstudio.sk/' + encodeURI(url), (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function run() {
  const html = await fetchPage('pristavbakrdazahradnydomcek');
  
  const regex = /<p[^>]*>(.*?)<\/p>|<img[^>]*srcSet="([^"]*)"[^>]*>|<img[^>]*src="([^"]*)"[^>]*>/g;
  let match;
  let currentSection = "Gallery";
  let sections = { "Gallery": [] };
  
  while ((match = regex.exec(html)) !== null) {
    if (match[1]) {
      const text = match[1].replace(/<[^>]*>/g, '').trim().toLowerCase();
      if (text === 'axonometria' || text.includes('pôdorys') || text.includes('pohľad') || text.includes('rez')) {
        currentSection = text;
        if (!sections[currentSection]) sections[currentSection] = [];
      }
    } else {
      let src = match[2] || match[3];
      if (src && src.includes('static.wixstatic.com/media/c62387_') && !src.includes('Ramart%20logo.png')) {
        sections[currentSection].push(src);
      }
    }
  }
  
  for (const s in sections) {
    console.log(s, sections[s].length);
  }
}
run();
