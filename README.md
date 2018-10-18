## 自我练习forked来自async-labs/saas
https://github.com/async-labs/saas

Build your own SaaS product with SaaS boilerplate app. Stack: React, Material-UI, Next, MobX, Express, Node, Mongoose, MongoDB, TypeScript.

## 在线demo: 
- https://saas-app.async-await.com


## 学习计划
- [x] [React](#React)
- [x] [MobX](#MobX)
- [ ] [TypeScript](#hire-our-team)
- [ ] [Next](#run-locally)
- [x] [Express](#deploy)
- [ ] [Node](#built-with)
- [ ] [Mongoose](#screenshots)
- [ ] [MongoDB](#showcase)

## 在本地运行
要在本地运行，您需要运行两个应用程序： `api` 和 `app`.

#### Running `api` app:
- Before running, create a `.env` file inside the `api` folder with the environmental variables listed below.<br/> 
  This file _must_ have values for the `required` variables.<br/>
  To use all features and third-party integrations, also add the `optional` variables. <br/>
  
  `.env`:
  ```
  # Used in api/server/app.ts
  MONGO_URL="xxxxxx"
  MONGO_URL_TEST="xxxxxx"
  SESSION_NAME="xxxxxx"
  SESSION_SECRET="xxxxxx"

  # Used in api/server/google.ts
  Google_clientID="xxxxxx"
  Google_clientSecret="xxxxxx"

  # Used in api/server/aws-s3.ts and api/server/aws-ses.ts
  Amazon_accessKeyId="xxxxxx"
  Amazon_secretAccessKey="xxxxxx"

  # Used in api/server/models/Invitation.ts and api/server/models/User.ts
  EMAIL_SUPPORT_FROM_ADDRESS="xxxxxx"

  # Used in api/server/mailchimp.ts
  MAILCHIMP_API_KEY="xxxxxx"
  MAILCHIMP_REGION="xxxx"
  MAILCHIMP_SAAS_ALL_LIST_ID="xxxxxx"

  # All env variables above this line are needed for successful user signup

  # Used in api/server/stripe.ts
  Stripe_Test_SecretKey="sk_test_xxxxxx"
  Stripe_Live_SecretKey="sk_live_xxxxxx"

  Stripe_Test_PublishableKey="pk_test_xxxxxx"
  Stripe_Live_PublishableKey="pk_live_xxxxxx"

  Stripe_Test_PlanId="plan_xxxxxx"
  Stripe_Live_PlanId="plan_xxxxxx"

  Stripe_Live_EndpointSecret="whsec_xxxxxx"

  PRODUCTION_URL_APP="https://saas-app.async-await.com"
  PRODUCTION_URL_API="https://saas-api.async-await.com"
  ```
  Important: The above environmental variables are available on the server only. You should add your `.env` file to `.gitignore` inside the `api` folder so that your secret keys are not stored on a remote Github repo.
  
  - To get `MONGO_URL` and `MONGO_URL_TEST`, we recommend a [free MongoDB at mLab](https://docs.mlab.com/).
  - Specify your own name and secret keys for Express session: [SESSION_NAME](https://github.com/expressjs/session#name) and [SESSION_SECRET](https://github.com/expressjs/session#express)
  - Get `Google_clientID` and `Google_clientSecret` by following the [official OAuth tutorial](https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin). <br/>
    Important: For Google OAuth app, callback URL is: http://localhost:8000/oauth2callback <br/>
    Important: You have to enable Google+ API in your Google Cloud Platform account.

- Once `.env` is created, you can run the `api` app. Navigate to the `api` folder, run `yarn` to add all packages, then run the command below:
  ```
  yarn dev
  ```

#### Running `app` app:
- Navigate to the `app` folder, run `yarn` to add all packages, then run the command below and navigate to `http://localhost:3000`:
  ```
  GA_TRACKING_ID=UA-xxxxxxxxx-x StripePublishableKey=pk_xxxxxx yarn dev
  ```
  - To get `GA_TRACKING_ID`, set up Google Analytics and follow [these instructions](https://support.google.com/analytics/answer/1008080?hl=en) to find your tracking ID.
  - To get `StripePublishableKey`, go to your Stripe dashboard, click `Developers`, then click `API keys`.
  
  You are welcome to remove Google Analytics integration or pass universally available variables inside the code. If you do so, your command to run `app` will be:
  ```
  yarn dev
  ```

Internal and external API requests will be sent from `http://localhost:3000` to `http://localhost:8000`.


## 部署
To deploy the two apps (`api` and `app`), follow the instructions below.

- Inside the `api` folder, create a `now.json` file with the following content:
  ```
  {
    "env": {
        "NODE_ENV": "production"
    },
    "dotenv": true,
    "alias": "saas-api.async-await.com",
    "scale": {
      "sfo1": {
        "min": 1,
        "max": 1
      }
    }
  }
  ```
  Remember to edit `now.json` so it reflects your domain.
  
- Inside the `app` folder, create a `now.json` file with the following content:
  ```
  {
    "env": {
        "NODE_ENV": "production",
        "GA_TRACKING_ID": "UA-xxxxxxxxx-x",
        "StripePublishableKey": "pk_live_xxxxxx",
        "PRODUCTION_URL_APP": "https://saas-app.async-await.com",
        "PRODUCTION_URL_API": "https://saas-api.async-await.com"
    },
    "alias": "saas-app.async-await.com",
    "scale": {
      "sfo1": {
        "min": 1,
        "max": 1
      }
    }
  }
  ```
  Remember to edit `now.json` so it reflects your `GA_TRACKING_ID` and domains.

- Follow [these simple steps](https://github.com/builderbook/builderbook#deploy) to deploy each app to `Now` cloud by Zeit.

Learn how to configure and scale your deployment: [Now docs](https://zeit.co/docs/features/configuration).

You are welcome to deploy to any cloud provider. We plan to publish a tutorial for AWS Elastic Beanstalk.



## 项目结构

#### api的结构：
```
├── server
│   ├── api
│   │   ├── index.ts
│   │   ├── public.ts
│   │   ├── team-leader.ts
│   │   ├── team-member.ts
│   ├── models
│   │   ├── Discussion.ts
│   │   ├── EmailTemplate.ts
│   │   ├── Invitation.ts
│   │   ├── Post.ts
│   │   ├── Purchase.ts
│   │   ├── Team.ts
│   │   ├── User.ts
│   ├── utils
│   │   ├── slugify.ts
│   ├── app.ts
│   ├── aws-s3.ts
│   ├── aws-ses.ts
│   ├── google.ts
│   ├── logs.ts
│   ├── mailchimp.ts
│   ├── stripe.ts
├── static
├── test/server/utils
├── .eslintrc.js
├── .gitignore
├── .npmignore
├── nodemon.js             
├── package.json
├── tsconfig.json
├── yarn.lock
```

#### app的结构：
```
├── components
│   ├── common
│   │   ├── ActiveLink.tsx
│   │   ├── AutoComplete.tsx
│   │   ├── AvatarwithMenu.tsx
│   │   ├── Confirm.tsx
│   │   ├── Loading.tsx
│   │   ├── LoginButton.tsx
│   │   ├── MenuWithLinks.tsx
│   │   ├── MenuWithMenuItems.tsx
│   │   ├── Notifier.tsx
│   │   ├── SettingList.tsx
│   ├── discussions
│   │   ├── CreateDiscussionForm.tsx
│   │   ├── DiscussionActionMenu.tsx
│   │   ├── DiscussionList.tsx
│   │   ├── DiscussionListItem.tsx
│   │   ├── EditDiscussionForm.tsx
│   ├── posts
│   │   ├── PostContent.tsx
│   │   ├── PostDetail.tsx
│   │   ├── PostEditor.tsx
│   │   ├── PostForm.tsx
│   ├── teams
│   │   ├── InviteMember.tsx
│   ├── users
│   │   ├── MemberChooser.tsx
├── lib
│   ├── api
│   │   ├── getRootUrl.ts
│   │   ├── makeQueryString.ts
│   │   ├── public.ts
│   │   ├── sendRequestAndGetResponse.ts
│   │   ├── team-leader.ts
│   │   ├── team-member.ts
│   ├── store
│   │   ├── discussion.ts
│   │   ├── index.ts
│   │   ├── invitation.ts
│   │   ├── post.ts
│   │   ├── team.ts
│   │   ├── user.ts
│   ├── confirm.ts
│   ├── context.ts
│   ├── env.js
│   ├── gtag.js
│   ├── notifier.ts
│   ├── resizeImage.ts
│   ├── sharedStyles.ts
│   ├── withAuth.tsx
│   ├── withLayout.tsx
│   ├── withStore.tsx
├── pages
│   ├── settings
│   │   ├── team-billing.tsx
│   │   ├── team-members.tsx
│   │   ├── team-profile.tsx
│   │   ├── your-profile.tsx
│   ├── _document.tsx
│   ├── create-team.tsx
│   ├── discussion.tsx
│   ├── invitation.tsx
│   ├── login.tsx
├── server
│   ├── app.ts
│   ├── routesWithSlug.ts
├── static
│   ├── robots.txt
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── .npmignore
├── next.config.js
├── nodemon.json
├── package.json
├── tsconfig.json
├── tsconfig.server.json
├── .tslint.json
├── yarn.lock
```