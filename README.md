# dev-space

## Try it our [here](https://devspace.d-one.design)

## Description

dev-space is an open-source application that allows users to share their projects and collaborate with others. It's built using Next JS and React, and it's designed to be a user-friendly interface for developers. The application allows users to share code snippets, follow each other and collaborate.

## Features

- Authentication
- Post composer - supports code blocks
- Feed
- Follow/Unfollow
- Like/Unlike
- Bookmark/Unbookmark
- Search
- Official Channels
- Dark/Light Theme
- Notifications

## Screenshots

### Feed

![Feed](https://utfs.io/f/24ba55b7-a4a7-4900-b663-a13e207dfbf4-1va1q.jpg)

### Composer

![Composer](https://utfs.io/f/8711461a-a342-48a2-9d29-2ba1e57684ee-9wtzvk.jpg)

### Profile

![Profile](https://utfs.io/f/238ce7c3-6ed2-416c-99d0-636b8e68cac2-5482fr.jpg)

### Search

![Search](https://utfs.io/f/f7c1df1c-d9b0-4b22-beea-4e9de7481291-ezlxzs.jpg)

### Dark Theme

![Dark Theme](https://utfs.io/f/8cbd5618-78a9-4603-b0eb-03f25b2ea938-l802ia.jpg)

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next Auth
- Lexical
- Drizzle
- MobX
- Pusher

## Installation

To get a local copy up and running follow these simple steps:

1. Clone the repo

   ```bash
   git clone https://github.com/d-one-company/dev-space.git
   ```

2. Install packages

   ```bash
   pnpm install
   ```

3. Start the development server

   ```bash
   pnpm dev
   ```

## Usage

To use the application, navigate to the `/` route in your browser.

### Home Page

Home page displays your feed, post composer and sidebar. In the composer you can either paste in a code block or write your own. Feed displays all posts and either you made or profile that you follow. In the right sidebar, you can see all the official channels, including VueJS, TypeScript, React, VSCode, ChatGPT.

### Profile Page

Profile page is separated in two parts. First one displayes users image, info and follow button for you to follow or unfollow. Second part displays all of the posts created by the user.

### Posts

Each posts has a content, which is either code block or text. It also has a bookmark button, like button and creator info. You can see all the posts you bookmarked on `/bookmarks` page.

### Notifications

Notifications page displays all the notifications you have received. There are three types of notifications: **Follow**, **Like** and **New Post**.

### Additional Featurs

**Search** - allows users to find users by searching for their name of username.
**Official Channels** - list of the official/company channels.
**Dark/Light Theme** - allows users to switch between dark and light theme.
**Settings** - allows users to change their username.
