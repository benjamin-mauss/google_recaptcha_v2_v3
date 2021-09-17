# google recaptcha v2 and v3

This project is a implementation of google recaptcha v2 and v3 in node js

## How to set it up?

- create a google account if you don't have one and login
- go to https://www.google.com/recaptcha/about/ and create a project using v2 and another for v3
- get the public and secrete keys for both of the projects
- create a file in this directory named `.env` and set it's content as bellow, replacing by your keys:

```env
recaptcha_secret_key_v2={{your_secret_key_v2}}
recaptcha_public_key_v2={{your_public_key_v2}}
recaptcha_secret_key_v3={{your_secret_key_v3}}
recaptcha_public_key_v3={{your_public_key_v3}}
```

- Assuming that you have node js and npm installed:

```bash
cd your_project_folder
npm install
npm init
npm start run
```

Documentation:

- v2: https://developers.google.com/recaptcha/docs/display

- v3: https://developers.google.com/recaptcha/docs/v3
