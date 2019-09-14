# ionic-mqtt
Exemplo de como enviar e receber mensagens de um MQTT Broker através de um app desenvolvido com Ionic.
O Broker utilizado neste exemplo foi o Mosquitto 1.6.4, para Windows 64 bits.

Atenção: Aplicações hibridas se utilizam de WebSockets para se conectar a servidores TCP. Portanto, é necessário que seu Broker MQTT 
esteja configurado para aceitar esse tipo de conexão.

Para configurar WebSockets no Mosquitto, adicione as seguintes linhas no mosquitto.conf:

<i>listener 1883</i><br>
<i>listener 9001</i><br>
<i>protocol websockets</i><br>

A seguir, reinicie o Mosquitto. Se nao pegar as configurações, execute informando a localização do arquivo. Por exemplo:

> mosquitto -c "/path/do/arquivo/de/configuracao/mosquitto.conf"

Obs: O suporte a WebSocket foi implantado no Mosquitto a partir da versão 1.5.

Os arquivos aqui que devem ser observados são:<br>
<b>src/app/app.module.ts</b> - Configuração do ngx-mqtt.<br>
<b>src/app/home/home.page.ts</b> - Implatação e funções se envio e recebimento de mensagens.<br>
<b>src/app/home/home.page.html</b> - Interface gráfica básica.<br>


