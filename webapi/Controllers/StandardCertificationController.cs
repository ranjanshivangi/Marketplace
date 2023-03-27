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
    public class StandardCertificationController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public StandardCertificationController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Certifications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StandardCertificate>>> GetCertifications()
        {
            if (_context.StandardCertificates == null)
            {
                return NotFound();
            }
            return await _context.StandardCertificates.ToListAsync();
        }

        // GET: api/Certifications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StandardCertificate>> GetCertification(int id)
        {
            if (_context.StandardCertificates == null)
            {
                return NotFound();
            }
            var certification = await _context.StandardCertificates.FindAsync(id);

            if (certification == null)
            {
                return NotFound();
            }

            return certification;
        }

        // PUT: api/Certifications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
      /*  [HttpPut("{id}")]
        public async Task<IActionResult> PutCertification(int id, Certification certification)
        {
            if (id != certification.CertificationID)
            {
                return BadRequest();
            }

            _context.Entry(certification).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CertificationExists(id))
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

        // POST: api/Certifications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPost]
        public async Task<ActionResult<Certification>> PostCertification(Certification certification)
        {
            if (_context.Certifications == null)
            {
                return Problem("Entity set 'MarketplaceContext.Certifications'  is null.");
            }
            _context.Certifications.Add(certification);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCertification", new { id = certification.CertificationID }, certification);
        }*/

        // DELETE: api/Certifications/5
       /* [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCertification(int id)
        {
            if (_context.Certifications == null)
            {
                return NotFound();
            }
            var certification = await _context.Certifications.FindAsync(id);
            if (certification == null)
            {
                return NotFound();
            }

            _context.Certifications.Remove(certification);
            await _context.SaveChangesAsync();

            return NoContent();
        }
*/
        private bool CertificationExists(int id)
        {
            return (_context.StandardCertificates?.Any(e => e.CertificateId == id)).GetValueOrDefault();
        }
    }
}
