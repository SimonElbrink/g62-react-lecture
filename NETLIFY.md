# Deploy on Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site** → **Import an existing project**, connect your GitHub account, and select the repository.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Choose **Deploy site**. Netlify will build and deploy the app; future pushes to the connected branch trigger new deployments automatically.
