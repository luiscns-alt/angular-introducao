import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../services/alunos.service';

interface GitHubResponse {
  imcomplete_results: boolean;
  items: any[];
  total_count: number;
}

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

  constructor(private alunosService: AlunosService, private http: HttpClient) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit() {}

  handleClick() {
    alert('Hi!');
  }

  getProjects() {
    if (this.searchText) {
      const url = `http://api.githup.com/search/repositories`;

      const params = new HttpParams().set('q', this.searchText);

      this.http.get<GitHubResponse>(url, { params }).subscribe((res) => {
        this.projects = res.items;
      });
    }
  }
}
