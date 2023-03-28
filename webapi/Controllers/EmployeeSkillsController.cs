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
        [HttpPut("{employeeId}")]
        public async Task<IActionResult> PutEmployeeSkills(string employeeId, [FromBody] EmployeesSkillDAO employeeSkills)
        {
            var employee = _context.Employees.Find(employeeId);
            var skill = _context.Skills.Find(employeeSkills.SkillId);
            
            if (employee == null)
            {
                return NotFound();
            }
            if (skill == null)
            {
                return NotFound();
            }
            _context.EmployeesSkills.Find(employeeId);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeSkillsExists(employeeSkills.SkillId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeSkills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{employeeId}")]
        public async Task<ActionResult<EmployeesSkill>> PostEmployeeSkills( string employeeId, [FromBody]EmployeesSkillDAO employeeSkills)
        {
            if (_context.EmployeesSkills == null)
            {
                return Problem("Entity set 'MarketplaceContext.EmployeeSkills'  is null.");
            }

            var employee = _context.Employees.Find(employeeId);
            var skill = _context.Skills.Find(employeeSkills.SkillId);
            var employeeSkillAvailable = _context.EmployeesSkills.Where(employeeskill => employeeskill.EmployeeId == employeeId 
                                                                 && employeeskill.SkillId== employeeSkills.SkillId)
                                                                .FirstOrDefault();

            if (employee == null)
            {
                return NotFound();
            }
            if (skill == null)
            {
                return NotFound();
            }
            if (employeeSkillAvailable != null)
            {
                return Conflict();

            }
            var employeeSkill = new EmployeesSkill
            {
                Employee = employee,
                Skill=skill,
                EmployeeId= employeeId,
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
                
                throw;
            }

            return CreatedAtAction("GetEmployeeSkills", new { id = employeeSkills.SkillId }, employeeSkills);
        }

      

        private bool EmployeeSkillsExists(int id)
        {
            return (_context.EmployeesSkills?.Any(e => e.SkillId == id)).GetValueOrDefault();
        }
    }
}
