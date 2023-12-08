# SocioBulls

Social Media for AlgoBulls

## Features

- Create, edit, delete a post
- Like, bookmark a post
- Post a comment on a post

## Pre-requisites

- [Node.js]() | Uses [v20.9.0]()
- [npm]() - Node Package Manager | Uses [v10.1.0]()

## Installation

- Clone the repository

```bash
git clone https://github.com/prajeshElEvEn/sociobulls
cd sociobulls
```

- Open two terminals
  - Termial 1
  ```bash
  cd server
  npm i
  ```
  - Termial 2
  ```bash
  cd client
  npm i
  ```

## Usage

> Make sure you're inside the `./sociobulls` directory

- Create `.env.development` inside `./sociobulls/server` and put in the content as:

```.env
NODE_ENV=development
PORT=<port>
HOSTNAME=<ip_address>
MONGO_URI=<mongo_connection_uri>
SECRET=<any_secret_key>
EXPIRY=<expiry_duration>
```

> You can refer to ./sociobulls/server/.env.example

- Create `.env.development` inside `./sociobulls/client` and put in the content as:

```.env
REACT_APP_SERVER_PORT=<same_as_server_port>
REACT_APP_SERVER_HOSTNAME=<same_as_server_hostname>
REACT_APP_API_URL=http://${REACT_APP_SERVER_HOSTNAME}:${REACT_APP_SERVER_PORT}/api
REACT_APP_AVATAR_URL=http://${REACT_APP_SERVER_HOSTNAME}:${REACT_APP_SERVER_PORT}/uploads/avatars/
```

> You can refer to ./sociobulls/client/.env.example

- Open two terminals
  - Terminal 1 for `server`
  ```bash
  cd server
  npm run start
  ```
  - Terminal 2 for `client`
  ```bash
  cd client
  npm run start
  ```

## Resources
