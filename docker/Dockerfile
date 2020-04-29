# Alpine Linux with OpenJDK JRE
FROM openjdk:8-jre-alpine

# Copy war file
COPY users-0.0.1-SNAPSHOT.jar /users.war

# run the app
CMD ["/usr/bin/java", "-jar", "/users.war"]