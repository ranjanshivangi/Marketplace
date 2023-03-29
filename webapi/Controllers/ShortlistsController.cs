using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;
using MarketplaceAPI.DAO;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Runtime.InteropServices;

namespace MarketplaceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShortlistsController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public ShortlistsController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Shortlists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shortlist>>> GetShortlists()
        {
            if (_context.Shortlists == null)
            {
                return NotFound();
            }
            return await _context.Shortlists.ToListAsync();
        }

        // GET: api/Shortlists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shortlist>> GetShortlist(int id)
        {
            if (_context.Shortlists == null)
            {
                return NotFound();
            }
            var shortlist = await _context.Shortlists.FindAsync(id);

            if (shortlist == null)
            {
                return NotFound();
            }

            return shortlist;
        }

        

        // POST: api/Shortlists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Shortlist>> PostShortlist(ShortlistDAO shortlist)
        {
          if (_context.Shortlists == null)
          {
              return Problem("Entity set 'MarketplaceContext.Shortlists'  is null.");
          }
            var manager = _context.Employees.Find(shortlist.ManagerEmployeeId);
            var employee = _context.Employees.Find(shortlist.ShortlistedEmployeeId);                  
            
            if (employee == null || manager == null)
            {
                return NotFound();
            }

            var shortlistedemployeeexists = _context.Shortlists.Where(e => e.ShortlistedEmployeeId == shortlist.ShortlistedEmployeeId && e.ManagerEmployeeId == shortlist.ManagerEmployeeId).ToList();
            if (shortlistedemployeeexists.Count != 0)
            {
                return Conflict();
            }

            var newShortlist = new Shortlist
            {
                ManagerEmployeeId= shortlist.ManagerEmployeeId,
                ShortlistedEmployeeId= shortlist.ShortlistedEmployeeId,
                Rrnumber= shortlist.Rrnumber,
                ShortlistsId= shortlist.ShortlistsId,
                ManagerEmployee = manager,
                ShortlistedEmployee = employee
            };
            _context.Shortlists.Add(newShortlist);
            await _context.SaveChangesAsync();

            int[] skillIdArray = shortlist.SkillIds;
            for (int i = 0; i < skillIdArray.Length; i++)
            {
                var employeeskill = _context.EmployeesSkills.Find(skillIdArray[i]);
                if (employeeskill == null)
                {
                    return NotFound();
                }
                var shoretlistedskill = new ShortlistedSkill
                {
                    EmployeeSkillId = employeeskill.SkillId,
                    EmployeesSkill = employeeskill,
                    ShortlistsId = shortlist.ShortlistsId,
                    Shortlists = newShortlist
                };
                _context.ShortlistedSkills.Add(shoretlistedskill);                
                await _context.SaveChangesAsync();

            }

            return CreatedAtAction("GetShortlist", new { id = shortlist.ShortlistsId }, shortlist);
        }

        // DELETE: api/Shortlists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShortlist(int id)
        {
            if (_context.Shortlists == null)
            {
                return NotFound();
            }
            var shortlist = await _context.Shortlists.FindAsync(id);
            if (shortlist == null)
            {
                return NotFound();
            }
            var shortlistedSkills = _context.ShortlistedSkills.Where(e=>e.ShortlistsId == id).ToList();
            if (shortlistedSkills.Count == 0)
            {
                return NotFound();
            }
            _context.ShortlistedSkills.RemoveRange(shortlistedSkills);
            await _context.SaveChangesAsync();

            _context.Shortlists.Remove(shortlist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShortlistExists(int id)
        {
            return (_context.Shortlists?.Any(e => e.ShortlistsId == id)).GetValueOrDefault();
        }
    }
}
