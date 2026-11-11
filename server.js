const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>OpenShift S2I Test App</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f4f6f9; color: #333; text-align: center; padding-top: 50px; }
        .card { background: white; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        h1 { color: #cc0000; }
        .info { text-align: left; background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>OpenShift S2I Deployment Success!</h1>
        <p>This Node.js application is running live inside your OpenShift cluster.</p>
        <div class="info">
          <h3>Developer Profile:</h3>
          <p><strong>Name:</strong> Atonu Saha</p>
          <p><strong>Role:</strong> Sr. DevOps Engineer</p>
          <p><strong>Company:</strong> Cloud Omnium Limited</p>
          <p><strong>Environment:</strong> OpenShift / OKD Cluster</p>
          <p><strong>Runtime:</strong> Node.js (Express)</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
