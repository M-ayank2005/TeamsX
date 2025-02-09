# 🚀 TeamX Chat

TeamX Chat is a full-featured real-time chat application built to enhance team collaboration. This full-stack project is developed using **Next.js 13**, **Socket.io**, **Prisma**, **Tailwind CSS**, and **MySQL**.

## 🌟 Features

- **💬 Real-time messaging**: Send and receive messages instantly using Socket.io.
- **📎 Send attachments**: Attach files to your messages using UploadThing.
- **✏️ Edit and delete messages**: Edit or delete messages in real-time for all participants.
- **🎥 Audio/Video channels**: Create and join text, audio, and video call channels.
- **🗨️ 1:1 messaging**: Direct conversations between team members.
- **📹 1:1 video calls**: Secure and real-time video calls between members.
- **👥 Member management**: Role management (Guest / Moderator), kicking members, and more.
- **🔗 Invite system**: Generate unique invite links and manage team invitations.
- **🔄 Infinite message loading**: Load older messages in batches of 10 using tanstack/query.
- **🛠️ Server creation and customization**: Personalize and create custom servers for teams.
- **🎨 Beautiful UI**: Fully responsive design with TailwindCSS and ShadcnUI.
- **🌗 Light/Dark mode**: Toggle between light and dark themes.
- **🛡️ WebSocket fallback**: Fallback to polling with alerts if WebSocket connection fails.
- **🔍 ORM with Prisma**: Efficient database queries using Prisma ORM.
- **💾 MySQL Database**: Powered by Planetscale's scalable MySQL instance.
- **🔐 Authentication**: Clerk provides secure user authentication and management.

## 🛠️ Tech Stack

- **Next.js 13**: For server-side rendering and static generation.
- **Socket.io**: For real-time WebSocket communication.
- **Prisma ORM**: For interacting with the MySQL database.
- **TailwindCSS**: For beautiful and responsive design.
- **MySQL**: Database to store chat data and user info, hosted on PlanetScale.
- **Clerk**: For user authentication and management.
- **UploadThing**: For handling file attachments.
- **LiveKit**: For real-time audio and video communication.

## ⚙️ Installation and Setup

### Prerequisites

To run the application locally, you need:

- **Node.js version v18.x.x**
- **MySQL Database** (or use PlanetScale for serverless MySQL)

### Cloning the repository

```bash
git clone https://github.com/M-ayank/TeamsX
```

### Installing dependencies

```bash
cd TeamsX
npm install
```

### Setting up the `.env` file

In the root directory of the project, create a `.env` file and add the following environment variables:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=https://yourapp.clerk.dev/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=https://yourapp.clerk.dev/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=https://yourapp.com/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=https://yourapp.com/welcome

NEXT_PUBLIC_SITE_URL=http://localhost:3000

DATABASE_URL=mysql://username:password@host:port/database_name

UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
NEXT_PUBLIC_LIVEKIT_URL=https://your-livekit-instance.com
```

### Setting up Prisma

If you're using **PlanetScale** or any other MySQL provider, configure the database and run the following commands:

```bash
npx prisma generate
npx prisma db push
```

This will sync your Prisma schema with your MySQL database.

### Running the application

After setting up everything, start the development server:

```bash
npm run dev
```

This will run the application on `http://localhost:3000`.

## 📜 Available Commands

You can run the following commands using `npm run [command]`:

| Command | Description |
| ------- | ----------- |
| `dev`   | Start the development server at `localhost:3000`. |
| `build` | Build the application for production. |
| `start` | Start the production server. |

## 🚀 Deployment

To deploy the app, you can use platforms like **Vercel** or **Netlify**. Ensure that all environment variables are set correctly in your production environment.

For deploying with Vercel, follow these steps:

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com/), import your repository.
3. Configure your environment variables in Vercel.
4. Deploy your project.

## 🤝 Contributing

We welcome contributions to improve this project. To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

For more information, feel free to create an issue or reach out!
