#!/bin/bash

kubectl delete configmap db-configmap
kubectl delete configmap portal-configmap
kubectl delete configmap system-configmap

kubectl delete -f news-db.yaml
kubectl delete -f news-portal.yaml
kubectl delete -f news-system.yaml

kubectl delete -f svc-news-db.yaml
kubectl delete -f svc-news-portal.yaml
kubectl delete -f svc-news-system.yaml