using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Marketplace.Data;
using Marketplace.Models;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployementHistoriesController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmployementHistoriesController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/EmployementHistories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployementHistory>>> GetEmployementHistories()
        {
          if (_context.EmployementHistories == null)
          {
              return NotFound();
          }
            return await _context.EmployementHistories.ToListAsync();
        }

        // GET: api/EmployementHistories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployementHistory>> GetEmployementHistory(string id)
        {
          if (_context.EmployementHistories == null)
          {
              return NotFound();
          }
            var employementHistory = await _context.EmployementHistories.FindAsync(id);

            if (employementHistory == null)
            {
                return NotFound();
            }

            return employementHistory;
        }

        // PUT: api/EmployementHistories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployementHistory(string id, EmployementHistory employementHistory)
        {
            if (id != employementHistory.CompanyName)
            {
                return BadRequest();
            }

            _context.Entry(employementHistory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployementHistoryExists(id))
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

        // POST: api/EmployementHistories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployementHistory>> PostEmployementHistory(EmployementHistory employementHistory)
        {
          if (_context.EmployementHistories == null)
          {
              return Problem("Entity set 'MarketplaceContext.EmployementHistories'  is null.");
          }
            _context.EmployementHistories.Add(employementHistory);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployementHistoryExists(employementHistory.CompanyName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployementHistory", new { id = employementHistory.CompanyName }, employementHistory);
        }

        // DELETE: api/EmployementHistories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployementHistory(string id)
        {
            if (_context.EmployementHistories == null)
            {
                return NotFound();
            }
            var employementHistory = await _context.EmployementHistories.FindAsync(id);
            if (employementHistory == null)
            {
                return NotFound();
            }

            _context.EmployementHistories.Remove(employementHistory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployementHistoryExists(string id)
        {
            return (_context.EmployementHistories?.Any(e => e.CompanyName == id)).GetValueOrDefault();
        }
    }
}
