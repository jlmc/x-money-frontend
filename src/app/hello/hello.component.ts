import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-message',
  template: `
        <h2>
            Hello {{nome}}
        </h2>
    `
})
export class HelloComponent {

  nome = 'Joao Costa';

}
