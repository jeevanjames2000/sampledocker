# Pull the latest image from Docker Hub
docker pull jeevanjames2000/sampledocker:latest

# Stop and remove the existing container (if it exists)
docker stop sampledocker 2> $null
docker rm sampledocker 2> $null

# Run the updated container on port 7000
docker run -d -p 7000:7000 --name sampledocker jeevanjames2000/sampledocker:latest

Write-Host "Container updated and running on port 7000."