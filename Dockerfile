# syntax=docker/dockerfile:1.6
FROM node:20

RUN <<EOF
  apt-get update

  apt-get install -y \
    gosu

  apt-get clean
  rm -rf /var/lib/apt/lists/*
EOF

RUN <<EOF
  groupadd -o -g 1000 user
  useradd -o -u 1000 -g user -m user

  mkdir -p /work
  chown -R user:user /work

  mkdir -p /home/user/.npm
  chown -R user:user /home/user/.npm
EOF

WORKDIR /work
ADD --chown=user:user ./package.json ./package-lock.json ./.npmrc /work/
RUN --mount=type=cache,uid=1000,gid=1000,target=/home/user/.npm <<EOF
  gosu user npm ci
EOF

ADD --chown=user:user ./next.config.mjs ./next-sitemap.config.js ./tsconfig.json ./.eslintrc.json ./.env.production /work/
ADD --chown=user:user ./public /work/public
ADD --chown=user:user ./src /work/src

CMD [ "gosu", "user", "npm", "run", "build" ]
