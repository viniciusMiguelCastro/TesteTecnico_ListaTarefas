using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]

public class TarefasController : ControllerBase
{
    private readonly AppDbContext _context;

    public TarefasController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Tarefa>> GetTarefas()
    {
        return _context.Tarefas.ToList();
    }

    [HttpPost]
    public ActionResult<Tarefa> PostTarefa(Tarefa tarefa)
    {
        _context.Tarefas.Add(tarefa);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetTarefas), new { id = tarefa.Id }, tarefa);
    }

    [HttpPut("{id}")]
    public IActionResult PutTarefa(int id, Tarefa tarefa)
    {
        if (id != tarefa.Id)
        {
            return BadRequest();
        }

        _context.Entry(tarefa).State = EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTarefa(int id)
    {
        var tarefa = _context.Tarefas.Find(id);

        if (tarefa == null)
        {
            return NotFound();
        }

        _context.Tarefas.Remove(tarefa);
        _context.SaveChanges();

        return NoContent();
    }
}
