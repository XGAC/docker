FROM python:3.9-slim-buster

WORKDIR ./
COPY requirements.txt ./

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3000

CMD ["python3", "service.py"]