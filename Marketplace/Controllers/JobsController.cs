using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Marketplace.Models;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly JobContext _context;

        public JobsController(JobContext context)
        {
            _context = context;
        }

        // GET: api/Jobs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Jobs>>> GetJobs()
        {
          if (_context.Jobs == null)
          {
              return NotFound();
          }
            return await _context.Jobs.ToListAsync();
        }

        // GET: api/Jobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Jobs>> GetJobs(int id)
        {
          if (_context.Jobs == null)
          {
              return NotFound();
          }
            var jobs = await _context.Jobs.FindAsync(id);

            if (jobs == null)
            {
                return NotFound();
            }

            return jobs;
        }

        // PUT: api/Jobs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobs(int id, Jobs jobs)
        {
            if (id != jobs.JDID)
            {
                return BadRequest();
            }

            _context.Entry(jobs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobsExists(id))
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

        // POST: api/Jobs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Jobs>> PostJobs(Jobs jobs)
        {
            _context.Jobs.Add(jobs);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetJobs), new { id = jobs.JDID }, jobs);

            /*if (_context.Jobs == null)
            {
                return Problem("Entity set 'JobContext.Jobs'  is null.");
            }
              _context.Jobs.Add(jobs);
              await _context.SaveChangesAsync();

              return CreatedAtAction("GetJobs", new { id = jobs.JDID }, jobs);*/
        }



        // DELETE: api/Jobs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobs(int id)
        {
            if (_context.Jobs == null)
            {
                return NotFound();
            }
            var jobs = await _context.Jobs.FindAsync(id);
            if (jobs == null)
            {
                return NotFound();
            }

            _context.Jobs.Remove(jobs);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobsExists(int id)
        {
            return (_context.Jobs?.Any(e => e.JDID == id)).GetValueOrDefault();
        }
    }
}
