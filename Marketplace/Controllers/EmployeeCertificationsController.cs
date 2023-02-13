using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Marketplace.Data;
using Marketplace.Models;
using Marketplace.DTO;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeCertificationsController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmployeeCertificationsController(MarketplaceContext context)
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
                              join t2 in _context.Certifications on t1.CertificationID equals t2.CertificationID
                              where t1.EmployeeId == id
                              select new EmployeeCertificationDTO
                              {
                                  CertificationID = t1.CertificationID,
                                  CertificationsName = t2.CertificationsName,
                                  CertificationsCompletionDate = t1.CertificationsCompletionDate,
                                  CertificationsFrom = t1.CertificationsFrom,
                                  CertificationsType = t1.CertificationsType
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeCertifications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
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
        }

        // POST: api/EmployeeCertifications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
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
        }

        // DELETE: api/EmployeeCertifications/5
        [HttpDelete("{id}")]
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
        }

        private bool EmployeeCertificationExists(int id)
        {
            return (_context.EmployeeCertifications?.Any(e => e.CertificationID == id)).GetValueOrDefault();
        }
    }
}
