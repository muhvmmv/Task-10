 Deployment: Putting your app online so anyone can access it through a URL 
 Single page application(SPA) like react router apps, deployment must handle client-side router
 React router: Enable spa navigation without full reload
 Surge: Free static hosting service for front-end apps.
 Working with surge: In terminal you need the following commands
 create react router
 npm run build
 npm install -g surge
 surge ./build
 to login: surge login
 After getting the url, it needs be paste in package.json as so "homepage": "https://jumpy-horn.surge.sh", if not the page will be blank.
 In our app, navigation between the pages is handled with React Router’s <BrowserRouter>, <Routes>, <Route>, and <Link> components, showing functionality of client-side routing.


 Unit test: Tests a single component in isolation, intergration testing: tests multiple components at the same time.
