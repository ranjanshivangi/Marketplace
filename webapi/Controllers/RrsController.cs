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
    public class RrsController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public RrsController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Rrs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rr>>> GetRr()
        {
            if (_context.Rrs == null)
            {
                return NotFound();
            }
            return await _context.Rrs.ToListAsync();
        }

        // GET: api/Rrs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rr>> GetRr(string id)
        {
            if (_context.Rrs == null)
            {
                return NotFound();
            }
            var rr = await _context.Rrs.FindAsync(id);

            if (rr == null)
            {
                return NotFound();
            }

            return rr;
        }

        // PUT: api/Rrs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutRr(string id, Rr rr)
        {
            if (id != rr.Rrnumber)
            {
                return BadRequest();
            }

            _context.Entry(rr).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RrExists(id))
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

        // POST: api/Rrs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
  /*      [HttpPost]
        public async Task<ActionResult<Rr>> PostRr(Rr rr)
        {
            if (_context.Rr == null)
            {
                return Problem("Entity set 'MarketplaceContext.Rr'  is null.");
            }
            _context.Rr.Add(rr);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RrExists(rr.Rrnumber))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRr", new { id = rr.Rrnumber }, rr);
        }*/

        // DELETE: api/Rrs/5
       /* [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRr(string id)
        {
            if (_context.Rr == null)
            {
                return NotFound();
            }
            var rr = await _context.Rr.FindAsync(id);
            if (rr == null)
            {
                return NotFound();
            }

            _context.Rr.Remove(rr);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool RrExists(string id)
        {
            return (_context.Rrs?.Any(e => e.Rrnumber == id)).GetValueOrDefault();
        }
    }
}
