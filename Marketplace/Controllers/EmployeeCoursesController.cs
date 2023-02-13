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
using System.Reflection.Metadata;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeCoursesController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmployeeCoursesController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeCourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeCourses>>> GetEmployeeCourses()
        {
          if (_context.EmployeeCourses == null)
          {
              return NotFound();
          }
            return await _context.EmployeeCourses.ToListAsync();
        }

        // GET: api/EmployeeCourses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Employeecourse>>> GetEmployeeCourses(String id)
        {
          if (_context.EmployeeCourses == null)
          {
              return NotFound();
          }
            var data = await (from t1 in _context.EmployeeCourses
                              join t2 in _context.Courses on t1.CourseID equals t2.CourseID
                              where t1.EmployeeId == id
                              select new Employeecourse
                              {
                                  CourseID = t1.CourseID,
                                  CourseName = t2.CourseName,
                                  CourseCompletionDate = t1.CourseCompletionDate,
                                  CourseFrom = t1.CourseFrom,
                                  CourseType = t1.CourseType
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeCourses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeCourses(int id, EmployeeCourses employeeCourses)
        {
            if (id != employeeCourses.CourseID)
            {
                return BadRequest();
            }

            _context.Entry(employeeCourses).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeCoursesExists(id))
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

        // POST: api/EmployeeCourses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeCourses>> PostEmployeeCourses(EmployeeCourses employeeCourses)
        {
          if (_context.EmployeeCourses == null)
          {
              return Problem("Entity set 'MarketplaceContext.EmployeeCourses'  is null.");
          }
            _context.EmployeeCourses.Add(employeeCourses);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeCoursesExists(employeeCourses.CourseID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeCourses", new { id = employeeCourses.CourseID }, employeeCourses);
        }

        // DELETE: api/EmployeeCourses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeCourses(int id)
        {
            if (_context.EmployeeCourses == null)
            {
                return NotFound();
            }
            var employeeCourses = await _context.EmployeeCourses.FindAsync(id);
            if (employeeCourses == null)
            {
                return NotFound();
            }

            _context.EmployeeCourses.Remove(employeeCourses);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeCoursesExists(int id)
        {
            return (_context.EmployeeCourses?.Any(e => e.CourseID == id)).GetValueOrDefault();
        }
    }
}
