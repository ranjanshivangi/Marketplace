using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;
using Marketplace.DTO;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeSkillsController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmployeeSkillsController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeSkills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeesSkill>>> GetEmployeeSkills()
        {
            if (_context.EmployeesSkills == null)
            {
                return NotFound();
            }
            return await _context.EmployeesSkills.ToListAsync();
        }

        // GET: api/EmployeeSkills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EmployeeSkillsDTO>>> GetEmployeeSkills(string id)
        {
            if (_context.EmployeesSkills == null)
            {
                return NotFound();
            }
            var data = await (from t1 in _context.EmployeesSkills
                              join t2 in _context.Skills on t1.SkillId equals t2.SkillId
                              where t1.EmployeeId == id
                              select new EmployeeSkillsDTO
                              {
                                  skillId = t1.SkillId,
                                  SkillName = t2.SkillName,
                                  Proficiency = t1.Proficience,
                                  LastUsed = t1.LastUsed,
                                  Experience = t1.ExperienceInMonths
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeSkills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeSkills(string id, EmployeeSkills employeeSkills)
        {
            if (id != employeeSkills.skillId)
            {
                return BadRequest();
            }

            _context.Entry(employeeSkills).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeSkillsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }*/

        // POST: api/EmployeeSkills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
      /*  [HttpPost]
        public async Task<ActionResult<EmployeeSkills>> PostEmployeeSkills(EmployeeSkills employeeSkills)
        {
            if (_context.EmployeeSkills == null)
            {
                return Problem("Entity set 'MarketplaceContext.EmployeeSkills'  is null.");
            }
            _context.EmployeeSkills.Add(employeeSkills);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeSkillsExists(employeeSkills.skillId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeSkills", new { id = employeeSkills.skillId }, employeeSkills);
        }*/

        // DELETE: api/EmployeeSkills/5
        /*[HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeSkills(string id)
        {
            if (_context.EmployeeSkills == null)
            {
                return NotFound();
            }
            var employeeSkills = await _context.EmployeeSkills.FindAsync(id);
            if (employeeSkills == null)
            {
                return NotFound();
            }

            _context.EmployeeSkills.Remove(employeeSkills);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool EmployeeSkillsExists(int id)
        {
            return (_context.EmployeesSkills?.Any(e => e.SkillId == id)).GetValueOrDefault();
        }
    }
}
