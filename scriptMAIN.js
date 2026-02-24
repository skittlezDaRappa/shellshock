<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="James Escobar Jr is an entrepreneur building in public. Focused on startups, investing, and long-term leverage." />
  <title>James Escobar Jr | Entrepreneur</title>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      background-color: #0b0b0b;
      color: #f5f5f5;
      line-height: 1.7;
      letter-spacing: -0.2px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }

    header {
      padding: 120px 20px 80px 20px;
      text-align: center;
      animation: fadeIn 1.2s ease forwards;
      opacity: 0;
    }

    header h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    header p {
      font-size: 1.25rem;
      font-weight: 300;
      color: #a0a0a0;
      max-width: 600px;
      margin: 0 auto;
    }

    section {
      padding: 70px 0;
      border-top: 1px solid #1a1a1a;
      animation: fadeIn 1.2s ease forwards;
      opacity: 0;
    }

    section:nth-of-type(1) { animation-delay: 0.3s; }
    section:nth-of-type(2) { animation-delay: 0.5s; }
    section:nth-of-type(3) { animation-delay: 0.7s; }

    h2 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 25px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #888;
    }

    .project {
      margin-bottom: 25px;
    }

    .project strong {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .project p {
      color: #b5b5b5;
      margin-top: 6px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
      position: relative;
    }

    a::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: #555;
      left: 0;
      bottom: -4px;
      transition: 0.3s ease;
    }

    a:hover::after {
      background: #ffffff;
    }

    footer {
      text-align: center;
      padding: 50px 20px;
      color: #666;
      font-size: 0.85rem;
      border-top: 1px solid #1a1a1a;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 2.4rem;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="container">
      <h1>James Escobar Jr</h1>
      <p>
        Entrepreneur focused on building long-term leverage through skills, execution, and disciplined growth.
      </p>
    </div>
  </header>

  <section>
    <div class="container">
      <h2>About</h2>
      <p>
        I am committed to developing high-value skills and building meaningful projects early.
        My focus is on entrepreneurship, investing, and creating scalable opportunities.
        This site documents my progress and long-term vision.
      </p>
    </div>
  </section>

  <section>
    <div class="container">
      <h2>Current Focus</h2>

      <div class="project">
        <strong>Skill Development</strong>
        <p>Building technical and strategic capabilities that compound over time.</p>
      </div>

      <div class="project">
        <strong>Business Projects</strong>
        <p>Launching and refining ventures with long-term upside.</p>
      </div>

      <div class="project">
        <strong>Investing & Markets</strong>
        <p>Studying capital allocation, risk management, and asymmetric opportunities.</p>
      </div>

    </div>
  </section>

  <section>
    <div class="container">
      <h2>Connect</h2>
      <p>
        <a href="#">Instagram</a> &nbsp; / &nbsp;
        <a href="#">LinkedIn</a> &nbsp; / &nbsp;
        <a href="#">YouTube</a>
      </p>
    </div>
  </section>

  <footer>
    © 2026 James Escobar Jr. All rights reserved.
  </footer>

</body>
</html>
