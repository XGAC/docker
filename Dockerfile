FROM python:3.9-slim-buster

WORKDIR /service
COPY requirements.txt ./

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python3", "app.py"]