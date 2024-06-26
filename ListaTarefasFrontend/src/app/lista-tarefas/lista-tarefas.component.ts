// // lista-tarefas.component.ts

// import { Component, OnInit } from '@angular/core';
// import { TarefaService } from '../tarefa.service';

// @Component({
//   selector: 'app-lista-tarefas',
//   templateUrl: './lista-tarefas.component.html',
//   styleUrls: ['./lista-tarefas.component.scss']
// })
// export class ListaTarefasComponent implements OnInit {

//   tarefas: { id: number, descricao: string, concluida: boolean }[] = [];
//   novaTarefa: string = '';

//   constructor(private tarefaService: TarefaService) { }

//   ngOnInit(): void {
//     this.carregarTarefas();
//   }

//   carregarTarefas() {
//     this.tarefaService.getTarefas().subscribe(
//       tarefas => {
//         this.tarefas = tarefas;
//       },
//       error => {
//         console.error('Erro ao carregar tarefas:', error);
//       }
//     );
//   }


//   marcarConcluida(tarefa: { id: number, descricao: string, concluida: boolean }) {
//     this.tarefaService.marcarConcluida(tarefa.id).subscribe(
//       response => {
//         console.log('Tarefa marcada como concluída:', response);
//         this.carregarTarefas(); // Atualiza a lista de tarefas após a marcação
//       },
//       error => {
//         console.error('Erro ao marcar tarefa como concluída:', error);
//       }
//     );
//   }

  

//   excluirTarefa(tarefa: { id: number, descricao: string, concluida: boolean }) {
//     this.tarefaService.excluirTarefa(tarefa.id).subscribe(
//       response => {
//         // Remova a tarefa da lista localmente
//         this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
//       },
//       error => {
//         console.error('Erro ao excluir tarefa:', error);
//       }
//     );
//   }

//   adicionarTarefa(event: any) {
//     event.preventDefault(); // Previne o comportamento padrão do formulário
//     this.tarefaService.adicionarTarefa(this.novaTarefa).subscribe(
//       response => {
//         // Supondo que a resposta contenha a nova tarefa adicionada
//         this.tarefas.push(response);
//         this.novaTarefa = ''; // Limpa o campo de nova tarefa após adicionar
//       },
//       error => {
//         console.error('Erro ao adicionar tarefa:', error);
//       }
//     );
//   }
// }


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
    tarefa.concluida = true;
    this.tarefaService.atualizarTarefa(tarefa).subscribe(
      (response: any) => {
        console.log('Tarefa marcada como concluída:', response);
        this.carregarTarefas(); // Atualiza a lista de tarefas após a marcação
      },
      (error: any) => {
        console.error('Erro ao marcar tarefa como concluída:', error);
      }
    );
  }

  excluirTarefa(tarefa: { id: number, descricao: string, concluida: boolean }) {
    this.tarefaService.excluirTarefa(tarefa.id).subscribe(
      (response: any) => {
        // Remova a tarefa da lista localmente
        this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
      },
      (error: any) => {
        console.error('Erro ao excluir tarefa:', error);
      }
    );
  }

  adicionarTarefa(event: any) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    this.tarefaService.adicionarTarefa(this.novaTarefa).subscribe(
      (response: any) => {
        // Supondo que a resposta contenha a nova tarefa adicionada
        this.tarefas.push(response);
        this.novaTarefa = ''; // Limpa o campo de nova tarefa após adicionar
      },
      (error: any) => {
        console.error('Erro ao adicionar tarefa:', error);
      }
    );
  }
}

