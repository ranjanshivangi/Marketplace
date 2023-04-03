using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;
using Marketplace.DTO;
using System.Reflection.Metadata;
using MarketplaceAPI.DAO;

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
        public async Task<ActionResult<IEnumerable<EmployeeCourse>>> GetEmployeeCourse()
        {
            if (_context.EmployeeCourses == null)
            {
                return NotFound();
            }
            return await _context.EmployeeCourses.ToListAsync();
        }

        // GET: api/EmployeeCourses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EmployeeCourseDTO>>> GetEmployeeCourse(String id)
        {
            if (_context.EmployeeCourses == null)
            {
                return NotFound();
            }
            var data = await (from employeeCourses in _context.EmployeeCourses
                              join emidsCourses in _context.EmidsCourses on employeeCourses.EmidsCourseId equals emidsCourses.CourseId
                              where employeeCourses.EmployeeId == id
                              select new EmployeeCourseDTO
                              {
                                  CourseID = employeeCourses.EmidsCourseId,
                                  CourseName = emidsCourses.CourseName,
                                  CourseCompletionDate = employeeCourses.CourseCompletionDate,
                                  CoursePlatform = emidsCourses.CoursePlatform,
                                  CourseType = emidsCourses.CourseType
                              }).ToListAsync();
            return data;
        }

        // PUT: api/EmployeeCourses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{employeeId}")]
        public async Task<IActionResult> PutEmployeeCourse(string employeeId, [FromBody] EmployeeCourseDAO employeeCourses)
        {
            var employee = _context.Employees.Find(employeeId);
            var emidsCourse = _context.EmidsCourses.Find(employeeCourses.EmidsCourseId);
            var employeeCourseAvailable = _context.EmployeeCourses.Where(employeecourse => employeecourse.EmployeeId == employeeId
                                                                 && employeecourse.EmidsCourseId == employeeCourses.EmidsCourseId)
                                                                .FirstOrDefault();
            if (employee == null)
            {
                return NotFound();
            }
            if (emidsCourse == null)
            {
                return NotFound();
            }
            if (employeeCourseAvailable == null)
            {
                return NotFound("EmployeeCourse not found");

            }
            if (employeeCourses.EmidsCourseId != null)
            {
                employeeCourseAvailable.EmidsCourseId = (int)employeeCourses.EmidsCourseId;
            }
            if (employeeCourses.CourseCompletionDate != null)
            {
                employeeCourseAvailable.CourseCompletionDate = (DateTime)employeeCourses.CourseCompletionDate;
            }
            if (employeeCourses.NonEmidsCourseName != null)
            {
                employeeCourseAvailable.NonEmidsCourseName = employeeCourses.NonEmidsCourseName;
            }
            if (employeeCourses.NonEmidsCoursePlatform != null)
            {
                employeeCourseAvailable.NonEmidsCoursePlatform = employeeCourses.NonEmidsCoursePlatform;
            }
            if (employeeCourses.NonEmidsCourseType != null)
            {
                employeeCourseAvailable.NonEmidsCourseType = (byte)employeeCourses.NonEmidsCourseType;
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


        

        // POST: api/EmployeeCourses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{employeeId}")]
        public async Task<ActionResult<EmployeeCourse>> PostEmployeeCourse(string employeeId, [FromBody] EmployeeCourseDAO employeeCourses)
        {

            var employee = _context.Employees.Find(employeeId);
            var emidsCourse = _context.EmidsCourses.Find(employeeCourses.EmidsCourseId);
            var employeeCourseAvailable = _context.EmployeeCourses.Where(employeecourse => employeecourse.EmployeeId == employeeId
                                                                 && employeecourse.EmidsCourseId == employeeCourses.EmidsCourseId)
                                                                .FirstOrDefault();
            if (employee == null)
            {
                return NotFound();
            }
            if (emidsCourse == null)
            {
                return NotFound();
            }
            if (employeeCourseAvailable != null)
            {
                return Conflict("This Course is already added");

            }
            var employeeCourse = new EmployeeCourse
            {
                Employee = employee,
                EmidsCourse = emidsCourse,
                EmployeeId = employeeId,
                IsEmidsCourse = employeeCourses.IsEmidsCourse,
                EmidsCourseId = (int)employeeCourses.EmidsCourseId,
                CourseCompletionDate = (DateTime)employeeCourses.CourseCompletionDate,
                NonEmidsCourseName = employeeCourses.NonEmidsCourseName,
                NonEmidsCoursePlatform = employeeCourses.NonEmidsCoursePlatform,
                NonEmidsCourseType = (byte)employeeCourses.NonEmidsCourseType
            };

            _context.EmployeeCourses.Add(employeeCourse);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeCoursesExists(employeeCourse.EmidsCourseId.ToString()))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeCourse", employeeCourses);
        }



        // DELETE: api/EmployeeCourses/5
        /* [HttpDelete("{id}")]
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
         }*/

        private bool EmployeeCoursesExists(string Id)
        {
            return (_context.EmployeeCourses?.Any(e => e.EmployeeId == Id)).GetValueOrDefault();
        }
    }
}
