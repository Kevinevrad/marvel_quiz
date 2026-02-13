import { initializeApp } from "firebase/app";

const firebaseConfig = {
  type: "service_account",
  project_id: "marvel-quiz-aa6d3",
  private_key_id: "27887960343efa649ef105b1fd26b31a26e80c10",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCp1y/GnQgWH8oi\nmpFSfmh0R6tbcRTcUYDDeBqQlYCq9vd/pUjVJZzyu2VqWDPf8Y8EomuOMzWym2Hu\nJYahR8NUuqNzLZTS0PCq/YAJGtsGqe6bpkPWp59/qzm5xYVWFz4mF+7DFKrU8MKn\nN07AD7lAHA8tkfh+svKVzN2HtIJdIG0ByWTN+8CUJ2V9v9jvDVy/TAQ/UK+XPuRB\nSGa86ScW/Qj+7q8z6BCaiHMpxgwxugoS4X3qsI1BRwCY/ppGkHI6gy8WopYEgH9i\nDB2mbmh1YC+mHWYUQcwRSJnpVdZhv+aDw84yQ/9lyKHu9oXi4UlPY7YrT7QxfHKM\nPrva/lWbAgMBAAECggEAHyAfEtSTd06DIl1WVZpx9SFvT3ZFXu0W3nvDzox/hJV3\nHS8CzoEypq9eMiOQ+jEQR0am1GwhIqbkRxscdbErpHsB2mlXlV0SRhvoG4MO8cUx\nw9ewJgYZLnIIRbnjqjffPWb0bE780cJ/wdpadctL5WpfA7h1JG8SEw706FpV68/p\ni3vmTcgdDT0+/A65fdoSEzK2D8XVzB/C/D+aZjSi6dI4w/5lqrA4l6X0LSu6gKo7\noM+EOCeaMOZfIA+66BmTVJxc5+3PtxwkzP8IT6/Q9siKF67e6WO0tdliHLfItNcK\n1UZq6W7ygUUa4ohreHIw6rYBzxGQtyqJU53MXRae8QKBgQDS4AjXYeuCndnXsvDc\nXC2RmoIjHvjBqMr2cyz/7zGrw2C2aIC8c/pIZNMCCnI2/PCnWo8PiEXJiHxv7Zlk\n6UazYJrx489awlqNcCr15RuVxzgCOYVLwtSXk/oy3qssrIoc+gdd850sfKKeb2d/\nBFKf3i5v/uKMZCntcRvQqbAzywKBgQDOLzwg+tS5bjlB7UJfYxBkf0NpAf5aXDCz\nOLMrbMmWBi6iqYuX8oWJYHyA4cXPNVizBat+c7p2oyJcGSiMLA0xJa/6hR3RsvhH\nwTi9zk0r3pV14POocxG92cyg/n+IxiZk9Ts5kKmz4fEYvv7PxhWmk9XeggocWeMm\noBr6u8FLcQKBgQCxWBCXcpZqBu7J5IeEC1GXfmWru8Rgud/XXA2gQD15wpp3TXPX\nCYKXl5ONx9M+Q4Lwe8yMt4JZdxuP1jaHE1iOStSEUZ51KbaV9JtsqP2F/UExPcbI\nbFX2FFD6ryEuNP0CWZQQg2zPmRH6RJ65x5zlLinHrohAoYxRUCqgVdUF+QKBgFpQ\ngHMlzDZpXLVPGyqzNwP+ZuXBVMv54+8tX/YekfKgRJ9FyvrE5c92LzM5Mi+Ae5j3\nW9ZpFP1QmgVjk8pKpYCotHv1AUnQrkaoEZW6nz0fI7Ld1X0s4lGZ7LN8pxqfSUQh\n00502pEL4FLpnq4eY29zBFSR+6HNkd1idk7sHVBRAoGBALe+H0Cpxq0e3Uk53FjN\nm7wjAjVPRMxUkdIadejTmc4HnC3nDuMQ65p8ErEquIQ1lxXAvgK4Vqj6HxWKzlol\n4Qt9SVK0NqwDxR8EiC8x+8OwKW1cOltWUOJHHRk7Y17bGeiRCDlZ0LvLt5PC1162\nRRZm1zpD3wioX7lpQi7e8EG5\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-fbsvc@marvel-quiz-aa6d3.iam.gserviceaccount.com",
  client_id: "114691893674267081537",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40marvel-quiz-aa6d3.iam.gserviceaccount.com",
};

const app = initializeApp(firebaseConfig);
