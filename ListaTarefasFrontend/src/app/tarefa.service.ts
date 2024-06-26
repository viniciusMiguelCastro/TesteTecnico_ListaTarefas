// tarefa.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:5000/api/tarefas'; 

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  adicionarTarefa(descricao: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { descricao });
  }

  atualizarTarefa(tarefa: { id: number, descricao: string, concluida: boolean }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }
  
  marcarConcluida(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, {concluida: true });
  }

  excluirTarefa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
