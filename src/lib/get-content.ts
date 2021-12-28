import { getAbsoluteURL } from "@lib/get-absolute-url";

export const getCss = (fontFamily?: any, fontFamilyUrl?: any, fontSize?: any, background?: any) => {
  return `
    ${
      fontFamilyUrl ??
      "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');"
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${
      fontFamily ?? "Nunito"
    }, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    color: white;
    }

    .container {
    background: url(${background ?? getAbsoluteURL(`/ogbackground.svg`)});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 1200px;
    height: 630px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3.5rem;
    }

    .content {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2.5rem;
    }

    .content > h1 {
    max-width: 80%;
    font-size: ${fontSize ?? "2em"};
    }

    .logo {
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
    align-items: center;
    font-weight: bold;
    width: 100%;
    }

    .tags {
    font-size: 0.4em;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    padding: 2rem 0;
    opacity: 0.7;
    }

    .pill{
      background: #caa8ff33;
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 50rem;
      text-transform: capitalize;
      box-shadow: 0 0 1rem rgba(0,0,0,0.1);
      font-weight: bold;
    }
    `;
};

export const getContent = (tags?: string, title?: any, handle?: any, logo?: any, css?: any, base?: any) => {
  return `
    <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
       ${css}
    </style>
    <body>
    ${base}
    </body>
    </html>`;
};
