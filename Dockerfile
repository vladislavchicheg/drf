FROM python:3.10

RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev

RUN pip3 install --upgrade pip

COPY ./backend/ ./
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn
RUN pip3 install psycopg2-binary

COPY wait-for-postgres.sh .
RUN chmod +x wait-for-postgres.sh