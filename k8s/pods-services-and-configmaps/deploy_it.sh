#!/bin/bash

kubectl apply -f db-configmap.yaml
kubectl apply -f portal-configmap.yaml
kubectl apply -f system-configmap.yaml


kubectl apply -f news-db.yaml
kubectl apply -f news-portal.yaml
kubectl apply -f news-system.yaml

kubectl apply -f svc-news-db.yaml
kubectl apply -f svc-news-portal.yaml
kubectl apply -f svc-news-system.yaml