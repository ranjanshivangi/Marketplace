using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Marketplace.DTO;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeCertificationController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmployeeCertificationController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeCertifications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeCertification>>> GetEmployeeCertifications()
        {
            if (_context.EmployeeCertifications == null)
            {
                return NotFound();
            }
            return await _context.EmployeeCertifications.ToListAsync();
        }

        // GET: api/EmployeeCertifications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EmployeeCertificationDTO>>> GetEmployeeCertification(string id)
        {
            if (_context.EmployeeCertifications == null)
            {
                return NotFound();
            }
            var data = await (from t1 in _context.EmployeeCertifications
                              join t2 in _context.StandardCertificates on t1.StandardCertificateId equals t2.CertificateId
                              where t1.EmployeeId == id
                              select new EmployeeCertificationDTO
                              {
                                  CertificationID = t1.StandardCertificateId,
                                  CertificationsName = t2.CertificateName,
                                  CertificationsCompletionDate = t1.CertificationsCompletionDate,
                               /*   CertificationsFrom = t1.CertificationsFrom,
                                  CertificationsType = t1.CertificationsType*/
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeCertifications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeCertification(int id, EmployeeCertification employeeCertification)
        {
            if (id != employeeCertification.CertificationID)
            {
                return BadRequest();
            }

            _context.Entry(employeeCertification).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeCertificationExists(id))
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

        // POST: api/EmployeeCertifications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPost]
        public async Task<ActionResult<EmployeeCertification>> PostEmployeeCertification(EmployeeCertification employeeCertification)
        {
            if (_context.EmployeeCertifications == null)
            {
                return Problem("Entity set 'MarketplaceContext.EmployeeCertifications'  is null.");
            }
            _context.EmployeeCertifications.Add(employeeCertification);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeCertificationExists(employeeCertification.CertificationID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeCertification", new { id = employeeCertification.CertificationID }, employeeCertification);
        }*/

        // DELETE: api/EmployeeCertifications/5
/*        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeCertification(int id)
        {
            if (_context.EmployeeCertifications == null)
            {
                return NotFound();
            }
            var employeeCertification = await _context.EmployeeCertifications.FindAsync(id);
            if (employeeCertification == null)
            {
                return NotFound();
            }

            _context.EmployeeCertifications.Remove(employeeCertification);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool EmployeeCertificationExists(string id)
        {
            return (_context.EmployeeCertifications?.Any(e => e.EmployeeId == id)).GetValueOrDefault();
        }
    }
}
