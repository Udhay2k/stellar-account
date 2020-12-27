$HELM del --purge stellar-microservice
$HELM install helm --name stellar-microservice
export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services stellar-microservice-starter)
export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
echo "Express Microservice is deployed at " http://$NODE_IP:$NODE_PORT/