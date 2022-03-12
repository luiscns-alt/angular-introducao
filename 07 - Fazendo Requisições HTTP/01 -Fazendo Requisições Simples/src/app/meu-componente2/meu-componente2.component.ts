import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css'],
})
export class MeuComponente2Component implements OnInit {
  nome = 'TreinaWeb';
  alunos = [];

  searchText = '';
  projects = [];

  constructor(
    private alunosService: AlunosService,
    private http: HttpClientModule
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {}

  handleClick() {
    alert('Hi!');
  }

  getProjects() {
    if (this.searchText) {
      const url = `http://api.githup.com/search/repositories?q=${this.searchText

      this.http.get(url)
        .subscribe(res =>{
          this.projects = res['items']
        })
    }
  }
}
