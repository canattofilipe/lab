# K8S App Documentation

## Application Overview

Your K8S app consists of three pods: `news-db`, `news-portal`, and `news-system`. These pods are connected to services and utilize ConfigMaps for configuration.

### Pod: news-db

The `news-db` pod runs a MySQL database container using the `aluracursos/mysql-db:1` image. It exposes port 3306 for database connections. The pod is configured with environment variables sourced from the `db-configmap` ConfigMap.

### Pod: news-portal

The `news-portal` pod runs a web application container using the `aluracursos/portal-noticias:1` image. It exposes port 80 for web traffic. The pod is configured with environment variables sourced from the `portal-configmap` ConfigMap.

### Pod: news-system

The `news-system` pod runs another web application container using the `aluracursos/sistema-noticias:1` image. It also exposes port 80 for web traffic. The pod is configured with environment variables sourced from the `system-configmap` ConfigMap.

### ConfigMaps

#### db-configmap

The `db-configmap` ConfigMap holds the configuration data for the MySQL database in the `news-db` pod. It defines the following key-value pairs:

- `MYSQL_ROOT_PASSWORD`: "123456"
- `MYSQL_DATABASE`: empresa
- `MYSQL_PASSWORD`: "123456"

#### portal-configmap

The `portal-configmap` ConfigMap holds the configuration data for the `news-portal` pod. It defines the following key-value pair:

- `IP_SISTEMA`: http://localhost:30001

#### system-configmap

The `system-configmap` ConfigMap holds the configuration data for the `news-system` pod. It defines the following key-value pairs:

- `HOST_DB`: svc-news-db:3306
- `USER_DB`: root
- `PASS_DB`: "123456"
- `DATABASE_DB`: empresa

### Services

#### svc-news-db

The `svc-news-db` service is a ClusterIP type service that exposes port 3306. It selects the `news-db` pod using the label `app: news-db`. This service allows other pods within the cluster to access the MySQL database running in the `news-db` pod.

#### svc-news-portal

The `svc-news-portal` service is a NodePort type service that exposes port 80 on each node in the cluster. It selects the `news-portal` pod using the label `app: news-portal`. This service allows external traffic to access the web application running in the `news-portal` pod.

#### svc-news-system

The `svc-news-system` service is a NodePort type service that exposes port 80 on each node in the cluster. It selects the `news-system` pod using the label `app: news-system`. This service allows external traffic to access the web application running in the `news-system` pod.

                +-------------+
                | svc-news-db |
                +------+------+ 
                       |
                       |
                       |   +--------+
                       +-->| news-db|
                           +--------+
                           |
                           |   +-----------------+
                           +-->| db-configmap    |
                               +-----------------+

                +----------------+
                | svc-news-portal |
                +------+------+ 
                       |
                       |
                       |   +------------+
                       +-->|  news-portal|
                           +------------+
                           |
                           |   +-----------------+
                           +-->| portal-configmap|
                               +-----------------+

                +----------------+
                | svc-news-system |
                +------+------+ 
                       |
                       |
                       |   +-------------+
                       +-->|  news-system|
                           +-------------+
                           |
                           |   +-----------------+
                           +-->| system-configmap|
                               +-----------------+