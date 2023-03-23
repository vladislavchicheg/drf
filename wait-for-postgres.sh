#!/bin/sh

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD="drf1548!" psql -h "$host" -d "drf_gb" -U "drf" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd