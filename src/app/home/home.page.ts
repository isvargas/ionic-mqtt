import { Component } from '@angular/core';
import { IMqttMessage, MqttModule, MqttService, IMqttServiceOptions } from 'ngx-mqtt';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  msg_recebida = '';
  msg_enviar = 'OLA MUNDO!';

  constructor(private mqttService: MqttService) {
    this.mqttService.observe('teste').subscribe((message: IMqttMessage) => {
      this.msg_recebida = message.payload.toString();
      console.log(this.msg_recebida);
    });
  }

  publishMessage() {
    console.log('Enviando mensagem...');
    this.mqttService.unsafePublish('teste', this.msg_enviar, {qos: 0, retain: true});
  }

}
