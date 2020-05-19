export const page: string = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Deno 🦕</title>
    <style type="text/css">
    .body {
      margin: 0;
      padding: 0;
    }
      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font: 1em sans-serif;
      }

      .title {
        padding: 0 2em;
        color: navy;
      }

      .subtitle {
        padding: 0 2em;
        color: #aaa;
      }

      .header-img {
        width: 100%;
        object-fit: contain;

      }
    </style>
  </head>
  <body class="body">
    <header class="header">
      <h2 class="title">Deno 1.0</h2>
      <p class="subtitle">
        Looks like Deno 1.0 is out and it is time to start tinkering with it.
        Deno is a rust based runtime for executing JavaScript and TypeScript. It
        is designed to be a replacement or an alternative to Node.js to run
        scripts.
      </p>
      <img class="header-img" src="https://deno.land/v1_wide.jpg" />
    </header>
  </body>
</html>
`;
