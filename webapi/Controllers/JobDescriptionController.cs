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
    public class JobDescriptionController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public JobDescriptionController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Jobs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobDescription>>> GetJob()
        {
            if (_context.JobDescriptions == null)
            {
                return NotFound();
            }
            return await _context.JobDescriptions
                .AsNoTracking()
               .AsQueryable()
               .Include(m => m.Rrs).ToListAsync(); ;
        }

        // GET: api/Jobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobDescription>> GetJob(int id)
        {
            if (_context.JobDescriptions == null)
            {
                return NotFound();
            }
            var job = await _context.JobDescriptions
                .Include(aa => aa.Rrs)
                .FirstOrDefaultAsync(aa => aa.Jdid == id);

            if (job == null)
            {
                return NotFound();
            }

            return job;
        }

        // PUT: api/Jobs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutJob(int id, Job job)
        {
            if (id != job.Jdid)
            {
                return BadRequest();
            }

            _context.Entry(job).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobExists(id))
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

        // POST: api/Jobs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPost]
        public async Task<ActionResult<Job>> PostJob(Job job)
        {
            if (_context.Job == null)
            {
                return Problem("Entity set 'MarketplaceContext.Job'  is null.");
            }
            _context.Job.Add(job);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJob", new { id = job.Jdid }, job);
        }*/

        // DELETE: api/Jobs/5
      /*  [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob(int id)
        {
            if (_context.Job == null)
            {
                return NotFound();
            }
            var job = await _context.Job.FindAsync(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.Job.Remove(job);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool JobExists(int id)
        {
            return (_context.JobDescriptions?.Any(e => e.Jdid == id)).GetValueOrDefault();
        }
    }
}
