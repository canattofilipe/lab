#!/bin/bash

# Delete the existing ConfigMaps
kubectl delete configmap db-configmap
kubectl delete configmap portal-configmap
kubectl delete configmap system-configmap

# Delete the existing pods and services
kubectl delete -f news-db.yaml
kubectl delete -f news-portal.yaml
kubectl delete -f news-system.yaml

# Deploy the db-configmap ConfigMap
kubectl apply -f db-configmap.yaml

# Deploy the portal-configmap ConfigMap
kubectl apply -f portal-configmap.yaml

# Deploy the system-configmap ConfigMap
kubectl apply -f system-configmap.yaml

# Deploy the news-db pod and svc-news-db service
kubectl apply -f news-db.yaml

# Deploy the news-portal pod and svc-news-portal service
kubectl apply -f news-portal.yaml

# Deploy the news-system pod and svc-news-system service
kubectl apply -f news-system.yaml