const http = require('http');

const data = JSON.stringify({
  name: 'Antigravity Form Test',
  company: 'Test Co',
  phone: '055-1234567',
  email: 'test@example.com',
  projectDetails: 'Testing form submission to Google Sheets.'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
