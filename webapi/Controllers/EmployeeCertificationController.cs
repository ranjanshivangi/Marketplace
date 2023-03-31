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
using MarketplaceAPI.DAO;

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
            var data = await (from employeeCertification in _context.EmployeeCertifications
                              join standardCertification in _context.StandardCertificates on employeeCertification.StandardCertificateId equals standardCertification.CertificateId
                              where employeeCertification.EmployeeId == id
                              select new EmployeeCertificationDTO
                              {
                                  CertificationID = employeeCertification.StandardCertificateId,
                                  CertificationsName = standardCertification.CertificateName,
                                  CertificationsCompletionDate = employeeCertification.CertificationsCompletionDate,
                                  CertificationsFrom = standardCertification.Issuer,
                                  CertificationsType = standardCertification.CertificateType
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeCertifications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{employeeId}")]
        public async Task<IActionResult> PutEmployeeSkills(string employeeId, [FromBody] EmployeesCertificationDAO employeeCertifications)
        {
            var employee = _context.Employees.Find(employeeId);
            var certification = _context.StandardCertificates.Find(employeeCertifications.StandardCertificateId);
            var employeeCertificationAvailable = _context.EmployeeCertifications.Where(employeecertification => employeecertification.EmployeeId == employeeId
                                                                 && employeecertification.StandardCertificateId == employeeCertifications.StandardCertificateId)
                                                                .FirstOrDefault();
            if (employee == null)
            {
                return NotFound();
            }
            if (certification == null)
            {
                return NotFound();
            }
            if (employeeCertificationAvailable == null)
            {
                return NotFound("EmployeeCertification not found");

            }

            if (employeeCertifications.StandardCertificateId != null)
            {
                employeeCertificationAvailable.StandardCertificateId = (int)employeeCertifications.StandardCertificateId;
            }
            if (employeeCertifications.CertificationsCompletionDate != null)
            {
                employeeCertificationAvailable.CertificationsCompletionDate = (DateTime)employeeCertifications.CertificationsCompletionDate;
            }
            if (employeeCertifications.NonStandardCertificateName != null)
            {
                employeeCertificationAvailable.NonStandardCertificateName = employeeCertifications.NonStandardCertificateName;
            }
            if (employeeCertifications.NonStandardIssuer != null)
            {
                employeeCertificationAvailable.NonStandardIssuer = employeeCertifications.NonStandardIssuer;
            }
            if (employeeCertifications.NonStandardCertificateType != null)
            {
                employeeCertificationAvailable.NonStandardCertificateType = (byte)employeeCertifications.NonStandardCertificateType;
            }
            

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }


        // POST: api/EmployeeCertifications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{employeeId}")]
        public async Task<ActionResult<EmployeeCertification>> PostEmployeeCertification(string employeeId, EmployeesCertificationDAO employeeCertifications)
        {
            if (_context.EmployeeCertifications == null)
            {
                return Problem("Entity set 'MarketplaceContext.EmployeeCertifications'  is null.");
            }
            var employee = _context.Employees.Find(employeeCertifications.EmployeeId);
            var standardCertification = _context.StandardCertificates.Find(employeeCertifications.StandardCertificateId);
            var employeeCertificationAvailable = _context.EmployeeCertifications.Where(employeecertificate => employeecertificate.EmployeeId == employeeId
                                                                 && employeecertificate.StandardCertificateId == employeeCertifications.StandardCertificateId)
                                                                .FirstOrDefault();

            if (employee == null)
            {
                return NotFound();
            }
            if(standardCertification == null)
            {
                return NotFound();
            }
            if (employeeCertificationAvailable != null)
            {
                return Conflict("This Certification is already added");

            }
            var employeeCertification = new EmployeeCertification
            {
                Employee = employee,
                StandardCertificate = standardCertification,
                EmployeeId = employeeId,
                StandardCertificateId = (int)employeeCertifications.StandardCertificateId,
                IsStandardCertificate=employeeCertifications.IsStandardCertificate,
                CertificationsCompletionDate= (DateTime)employeeCertifications.CertificationsCompletionDate,
                NonStandardCertificateName=employeeCertifications.NonStandardCertificateName,
                NonStandardIssuer=employeeCertifications.NonStandardIssuer,
                NonStandardCertificateType= (byte)employeeCertifications.NonStandardCertificateType,

    };
            _context.EmployeeCertifications.Add(employeeCertification);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeCertificationExists(employeeCertifications.StandardCertificateId.ToString()))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetEmployeeCertification", new { id = employeeCertifications.StandardCertificateId}, employeeCertification);
        }

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
