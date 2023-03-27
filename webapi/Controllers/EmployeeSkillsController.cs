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
using MarketplaceAPI.DAO;

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
            var data = await (from employeesSkills in _context.EmployeesSkills
                              join skills in _context.Skills on employeesSkills.SkillId equals skills.SkillId
                              where employeesSkills.EmployeeId == id
                              select new EmployeeSkillsDTO
                              {
                                  SkillId = employeesSkills.SkillId,
                                  SkillName = skills.SkillName,
                                  Proficiency = employeesSkills.Proficience,
                                  LastUsed = employeesSkills.LastUsed,
                                  ExperienceInMonths = employeesSkills.ExperienceInMonths
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
        [HttpPost]
        public async Task<ActionResult<EmployeesSkill>> PostEmployeeSkills(EmployeesSkillDAO employeeSkills)
        {
            if (_context.EmployeesSkills == null)
            {
                return Problem("Entity set 'MarketplaceContext.EmployeeSkills'  is null.");
            }
            var employee = _context.Employees.Find(employeeSkills.EmployeeId);
            var skill = _context.Skills.Find(employeeSkills.SkillId);
            if (employee == null)
            {
                return NotFound();
            }
            if (skill == null)
            {
                return NotFound();
            }
            var employeeSkill = new EmployeesSkill
            {
                Employee = employee,
                Skill=skill,
                EmployeeId=employeeSkills.EmployeeId,
                SkillId=employeeSkills.SkillId,
                LastUsed=employeeSkills.LastUsed,
                ExperienceInMonths=employeeSkills.ExperienceInMonths,
                Proficience=employeeSkills.Proficience,
                SkillSource=employeeSkills.SkillSource,
                SkillSourceId=employeeSkills.SkillSourceId
            };

            _context.EmployeesSkills.Add(employeeSkill);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeSkillsExists(employeeSkills.SkillId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeSkills", new { id = employeeSkills.SkillId }, employeeSkills);
        }

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
