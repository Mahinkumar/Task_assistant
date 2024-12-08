

> [!IMPORTANT]
> ALPHA Release date: 13 DECEMBER 2025 <br>
> BETA Release date: 20 DECEMBER 2025 <br>
> <br>
> We are planning on a major rework of UI and Certain Mechanics. <br>


> [!NOTE]
> This Project is a work in progress and is not suitable to be used at this moment.<br>
> Star the repository for progress and preview release updates.
<hr>


![image](https://github.com/user-attachments/assets/a241481e-a31a-4c0c-b687-c5f3469103f2)

<hr>

## Task Assistant
#### <a href="/">Guides</a> | <a href="/">Docs</a> | <a href="https://taskassistant.mahinkumar.com">Preview</a>
A Personal Task Assistant web application designed to improve productivity with automated Scheduling, Organization and Notes with support for optional AI assistance.<br>

<hr/>

## Getting Started

1. Update the postgres url environment variable in .env file.
2. Use the default from example.env if you are using docker compose for pg database

```bash
npm run db:start #To Start a docker postgres server
npm run db:push #To update your database

#Optional commands
npx drizzle-kit generate #Generate a migration script
npm run db: migrate #To migrate using migration script
```


### Running Development Server
```bash
npm run dev
```

Open https://localhost:5173 with your browser to see the result.

### Building the Application
```bash
npm run build
npm run preview #view build preview
```

Open https://localhost:4173 with your browser to see the build preview.

### Database tools
We use Drizzle for database ORM. <br> All Drizzle ORM tools can be used with this project. <br>
```bash
npx drizzle-kit generate #Generate SQL migration files based on your Drizzle schema
npx drizzle-kit migrate	 #Apply generated SQL migration files to your database
npx drizzle-kit pull	 #Pull(introspect) database schema, convert it to Drizzle schema and save it to your codebase
npx drizzle-kit push	 #Push your Drizzle schema to database either upon declaration or on subsequent schema changes
npx drizzle-kit studio	 #Connect to your database and spin up proxy server for Drizzle Studio
npx drizzle-kit check	 #Check for any race conditions(collisions) of generated migrations
npx drizzle-kit up	 #Upgrade snapshots of previously generated migrations
```
Visit the Drizzle <a href="https://orm.drizzle.team/docs/kit-overview">documentation</a> for more.

<hr>

## Features
1. Automated Task scheduling with a context aware Scheduling Algorithm.
2. Simple and clean Interface with easily approachable user Experience.
3. Key Analytics and Improvement Suggestions.
4. Task Tracking with Timer Support. 
5. Completely Private on device Data Management. 
6. Long Notes and Memories to keep task with their related information.
7. Integration with third party calendars (Needs API)
8. Note taking with markdown support
9. Optional Ambient noises

## Requirements
* A device that can run a browser
* Node.js version: 16.x or higher
* NPM (Node package manager)


## Architecture
<img width="1472" alt="Architecture" src="https://github.com/user-attachments/assets/f6c372ce-bcc3-4105-9637-b8608e3960e3">


