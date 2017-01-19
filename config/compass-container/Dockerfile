FROM ruby:2

RUN    gem install compass -v '~> 0.12.6' \
    && gem install compass-flexbox \
    && gem install sass

VOLUME /src
WORKDIR /src

ENTRYPOINT [ "compass", "compile", "-e", "production", "--force" ]
