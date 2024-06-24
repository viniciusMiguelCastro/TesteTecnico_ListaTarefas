import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-adicionar-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './adicionar-tarefa.component.html',
  styleUrl: './adicionar-tarefa.component.scss'
})
export class AdicionarTarefaComponent {
  novaTarefa: { descricao: string } = { descricao: '' };

  constructor(private tarefaService: TarefaService) { }

  adicionarTarefa() {
    this.tarefaService.adicionarTarefa(this.novaTarefa.descricao);
    this.novaTarefa.descricao = '';
  }
}
