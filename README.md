# Dockerized RemoteDev Server

## Usage

```bash
# If you want use `Save reports and logs` (Please see ENV section)
$ docker run -d --name db mongo
# Run Remotedev server container
$ docker run -d -p 8000:8000 \
  --name remotedev \
  --link db:db
  --env-file=.env \
  jhen0409/remotedev-server
```

The .env file is your configuration ([.env.default](.env.default))

#### ENV

* `PORT` -  A `remotedev-server` port
* `ADAPTER` -  A DB adapter for [js-data](https://github.com/js-data/js-data), see [https://github.com/zalmoxisus/remotedev-server#save-reports-and-logs](remotedev-server#save-reports-and-logs) for more information.
  * `firebase`
    * `DB_BASE_PATH` (`https://my-app.firebase.io`)
  * `http`
    * `DB_BASE_PATH` (`https://my-rest-server/api`)
  * `mongodb`
    * `DB_URI` (`mongodb://db:27017`)
    * `DB_NAME`
    * `DB_ID_ATTR`
    * `DB_TABLE`
  * `sql`
    * `DB_CLIENT` (`mysql`, `postgres`, `sqlite3`)
    * `DB_HOST`
    * `DB_USER`
    * `DB_PASSWORD`
    * `DB_NAME`
  * `rethinkdb`
    * `DB_HOST`
    * `DB_NAME`

## Build

```bash
$ docker build --rm -t jhen0409/remotedev-server .
```

## LICENSE

[MIT][LICENSE.md]
