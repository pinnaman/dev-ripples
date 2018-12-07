docker build -t pinnaman/test
docker run -d -p 3000:3000 -p 5858:5858 -v $(pwd):/app test
