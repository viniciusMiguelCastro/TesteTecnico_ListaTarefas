using System.ComponentModel.DataAnnotations;

public class Tarefa
{
    public int Id { get; set; }
    [Required]
    public string Descricao { get; set; }
    public bool Concluida { get; set; }
}