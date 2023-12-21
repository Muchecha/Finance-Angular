import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DespesaService } from 'src/app/services/despesa.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public menuService: MenuService, public despesaService: DespesaService,
    public authService: AuthService) {
  }

  ngOnInit() {
    this.menuService.menuSelecionado = 1;
    this.CarregaGraficos();
  }


  objetoGrafico: any;


  CarregaGraficos() {
    this.despesaService.CarregaGraficos(this.authService.getEmailUser())
      .subscribe((response: any) => {

        debugger
        this.objetoGrafico = response;
      },
        (error) => console.error(error),
        () => {

        }

      )

  }


}