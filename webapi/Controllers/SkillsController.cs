using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public SkillsController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Skills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
        {
            if (_context.Skills == null)
            {
                return NotFound();
            }
            return await _context.Skills.ToListAsync();
        }

        // GET: api/Skills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Skill>> GetSkills(string id)
        {
            if (_context.Skills == null)
            {
                return NotFound();
            }
            var skills = await _context.Skills.FindAsync(id);

            if (skills == null)
            {
                return NotFound();
            }

            return skills;
        }

        // PUT: api/Skills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutSkills(int id, Skill skills)
        {
            if (id != skills.SkillId)
            {
                return BadRequest();
            }

            _context.Entry(skills).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillsExists(id))
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

        // POST: api/Skills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
     /*   [HttpPost]
        public async Task<ActionResult<Skill>> PostSkills(Skill skills)
        {
            if (_context.Skill == null)
            {
                return Problem("Entity set 'MarketplaceContext.Skills'  is null.");
            }
            _context.Skill.Add(skills);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SkillsExists(skills.skillId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSkills", new { id = skills.SkillId}, skills);
        }*/

        // DELETE: api/Skills/5
      /*  [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkills(int id)
        {
            if (_context.Skill == null)
            {
                return NotFound();
            }
            var skills = await _context.Skill.FindAsync(id);
            if (skills == null)
            {
                return NotFound();
            }

            _context.Skill.Remove(skills);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool SkillsExists(int id)
        {
            return (_context.Skills?.Any(e => e.SkillId == id)).GetValueOrDefault();
        }
    }
}
