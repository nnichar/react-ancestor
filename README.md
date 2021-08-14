This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Assignment 3: Single component state managements (useState)

Completed the [assignment #2](https://github.com/insTern-Aug-2021/02-Component-paradigm)?

Are you now inspired to become one of the authors and appear on our statistics page? <br/>
(as well as inspired in web development in React way :stuck_out_tongue:)

if yes, we have setup something to support your way:

- Unsurprisingly, we have created [the skeleton UI](pages/create.tsx) as `/create` page, along with some code that allows users to upload images and receive a link to their images. <br />
  **Hint: The implemented code may help you better understand how `useState` works, therefore it's worth spending some time looking at it :smile:.**
- Two additional APIs has been added. [One](pages/api/create.ts) is `/api/create`. And [the other](pages/api/upload.ts) is `/api/upload`, which you can disregard.

To make the posting system work, more work is required:

- Manage the state of `<Input />` components corresponds to the value entered by the user. (Currently, `<Input />` always displays the blank value.)
- When a user clicks the `submit` button, grabs the value from all inputs and sends a create request to the `/api/create` endpoint. (API specification is detailed in the section below)
- **Bonus:** After creation completed, display [a successful message](https://ant.design/components/message/).

### How to communicate with create API?

There are two recommended ways to understand and approach how to send a request to the `/api/create` endpoint, in my opinion. Basically, reading back-end code directly from [pages/api/create.ts](pages/api/create.ts). Or you can explore through the [Postman collection](postman-docs/insTern.postman_collection.json) which i prefer more :wink:.

If you have never installed Postman before, please head to the [Postman download page](https://www.postman.com/downloads/), install it, and import [postman-docs/insTern.postman_collection.json](postman-docs/insTern.postman_collection.json) finally.

The reason I recommend the latter option is to familiarize yourself with Postman, as we use it to test our API and determine what data is required in the request before we code it in the front-end side.

If your request is properly formatted and processed completely, successfully, and wonderfully, you should see the newly created post on the [homepage](http://localhost:3000/).

## Key objectives

- Able to play with `useState` and gain a sense of how to manipulate the state of a single component in an aesthetically pleasing way.
- Able to call the API with specified endpoint and schema.
- Get familiar with Postman.

## Known Issue(s)

- Because the API uses an in-memory database, Next.js will refresh both the front-end and the API handler every time you save the code, resulting in the posts data being reset to a default value (8 posts).
- Your uploaded file will be saved in [this directory](public/assets/cats/). To avoid wasting disk space, it's best to remove the uploaded files in this folder on a regular basis. (But keep the original file; you can also use git revert on the left-hand side of your Visual Studio Code window to perform this as well)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
