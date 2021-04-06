FROM python:3.9.2-buster
MAINTAINER darius@murawski.blog
WORKDIR /app
ADD ./ /app
RUN python3 -m pip install --upgrade pip
EXPOSE 8888
CMD ["python", "-m", "http.server", "8888"]
