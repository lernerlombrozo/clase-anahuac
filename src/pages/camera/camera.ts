import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

    constructor(private camera:Camera){}
    
    foto="";

    tomarFoto() {
        var options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        }
        this.camera.getPicture(options)
            .then((imageData) => {
                this.foto = "data:image/jpeg;base64," + imageData;
            })
            .catch((err) => { console.log(err) })
    }

}
