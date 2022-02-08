FROM shakirmengrani/nx-builder as builder
ENV PATH=/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN go get github.com/dapr/go-sdk/client
RUN yarn nx build process

FROM shakirmengrani/nx-builder as final
COPY --from=builder /app/dist/apps/process /app/process
# COPY ./dist/apps/process /app/process
ENV PORT=3333
EXPOSE ${PORT}
CMD /app/process
