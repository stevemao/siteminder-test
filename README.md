This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

`npm run build` to build the site

`styled-components` is used for css-in-js

`react-form` is used to make it easy to deal with potential future common form tasks. EG: no need to write `event.preventDefault()`, complex form validations and submit to the backend etc.

Just based on the current requirements and my experiences, unit test on jsx is useless. When the requirement gets complex in the future and when we add stuff like redux, we can unit test the `connect()` logics etc. Or even better, write integration test.

Other things that listed on the requirement should be done on the backend. EG: use Email providers

Things that can be added in the future:

- [ ] reCAPTCHA
- [ ] Send this email with different services. EG: Gmail or outlook.
