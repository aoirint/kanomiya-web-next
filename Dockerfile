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
EOF

WORKDIR /work
ADD --chown=user:user ./package.json ./package-lock.json ./.npmrc /work/
RUN gosu user npm ci

ADD --chown=user:user ./next.config.mjs ./next-sitemap.config.js ./tsconfig.json ./.eslintrc.json ./.env.production /work/
ADD --chown=user:user ./public /work/public
ADD --chown=user:user ./src /work/src

CMD [ "gosu", "user", "npm", "run", "build" ]
