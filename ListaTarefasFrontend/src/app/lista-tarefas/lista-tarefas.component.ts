// // lista-tarefas.component.ts

// import { Component, OnInit } from '@angular/core';
// import { TarefaService } from '../tarefa.service';

// @Component({
//   selector: 'app-lista-tarefas',
//   templateUrl: './lista-tarefas.component.html',
//   styleUrls: ['./lista-tarefas.component.scss']
// })
// export class ListaTarefasComponent implements OnInit {

//   tarefas: any[] = []; // Inicializa a propriedade tarefas como um array vazio

//   novaTarefa: string = ''

//   constructor(private tarefaService: TarefaService) { }

//   ngOnInit(): void {
//     this.carregarTarefas();
//   }

//   carregarTarefas(): void {
//     this.tarefaService.getTarefas().subscribe(
//       (tarefas) => {
//         this.tarefas = tarefas;
//       },
//       (error) => {
//         console.error('Erro ao carregar tarefas:', error);
//       }
//     );
//   }

//   marcarConcluida(tarefa: any): void {
//     this.tarefaService.marcarConcluida(tarefa.id).subscribe(
//       (res) => {
//         console.log('Tarefa marcada como concluída:', tarefa);
//         this.carregarTarefas(); // Atualiza a lista após marcar como concluída
//       },
//       (error) => {
//         console.error('Erro ao marcar tarefa como concluída:', error);
//       }
//     );
//   }

//   excluirTarefa(tarefa: any): void {
//     this.tarefaService.excluirTarefa(tarefa.id).subscribe(
//       (res) => {
//         console.log('Tarefa excluída com sucesso:', tarefa);
//         this.carregarTarefas(); // Atualiza a lista após excluir
//       },
//       (error) => {
//         console.error('Erro ao excluir tarefa:', error);
//       }
//     );
//   }

//   adicionarTarefa(descricao: any): void {
//     this.tarefaService.adicionarTarefa(descricao).subscribe(
//       (novaTarefa) => {
//         console.log('Tarefa adicionada com sucesso:', novaTarefa);
//         this.carregarTarefas(); // Atualiza a lista após adicionar
//       },
//       (error) => {
//         console.error('Erro ao adicionar tarefa:', error);
//       }
//     );
//   }
// }


// lista-tarefas.component.ts

import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent implements OnInit {

  tarefas: { id: number, descricao: string, concluida: boolean }[] = [];
  novaTarefa: string = '';

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(
      tarefas => {
        this.tarefas = tarefas;
      },
      error => {
        console.error('Erro ao carregar tarefas:', error);
      }
    );
  }

  marcarConcluida(tarefa: { id: number, descricao: string, concluida: boolean }) {
    this.tarefaService.marcarConcluida(tarefa.id); // Ajustado para passar apenas o ID
  }

  excluirTarefa(tarefa: { id: number, descricao: string, concluida: boolean }) {
    this.tarefaService.excluirTarefa(tarefa.id); // Ajustado para passar apenas o ID
  }

  adicionarTarefa(event: any) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    this.tarefaService.adicionarTarefa(this.novaTarefa);
    this.novaTarefa = ''; // Limpa o campo de nova tarefa após adicionar
  }
}

