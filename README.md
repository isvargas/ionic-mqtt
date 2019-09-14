# ionic-mqtt
Exemplo de um cliente MQTT com Ionic

Exemplo de como enviar e receber mensagens de um MQTT Broker através de um app desenvolvido com Ionic.
O Broker utilizado neste exemplo foi o Mosquitto 1.6

Atenção: Aplicações hibridas se utilizam de WebSockets para se conectar a servidores TCP. Portanto, é necessário que seu Broker MQTT 
esteja configurado para aceitar esse tipo de conexão.

Para configura WebSockets no Mosquitto, adicione as seguintes linhas no mosquitto.conf:

listener 1883
listener 9001
protocol websockets

A seguir, reinicie o Mosquitto. Se nao pegar as configurações, execute informando a localização do arquivo. Por exemplo:

> mosquitto -c "/path/do/arquivo/de/configuracao/mosquitto.conf"

Obs: O suporte a WebSocket foi implantado no Mosquitto a partir da versão 1.5.

Os arquivos aqui que devem ser observados são:
src/app.module.ts - Configuracao o ngx-mqtt
home.page.ts - Implatação e funções se envio e recebimento de mensagens
home.page.html - Interface gráfica básica


