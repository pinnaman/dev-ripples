echo "##Removing old Image####"
docker rmi -f pinnaman/t1
echo "***Building Image##########"
docker build -t pinnaman/t1 -f Dockerfile_alpine_node .
echo "#####Build Successful, starting Container=>"
docker run -d -p 8080:8080 -v $(pwd):/usr/src pinnaman/t1
