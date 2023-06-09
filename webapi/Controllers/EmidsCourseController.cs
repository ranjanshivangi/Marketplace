﻿using System;
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
    public class EmidsCourseController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public EmidsCourseController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmidsCourse>>> GetCourses()
        {
            if (_context.EmidsCourses == null)
            {
                return NotFound();
            }
            return await _context.EmidsCourses.ToListAsync();
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmidsCourse>> GetCourses(int id)
        {
            if (_context.EmidsCourses == null)
            {
                return NotFound();
            }
            var courses = await _context.EmidsCourses.FindAsync(id);

            if (courses == null)
            {
                return NotFound();
            }

            return courses;
        }

        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPut("{id}")]
        public async Task<IActionResult> PutCourses(int id, Courses courses)
        {
            if (id != courses.CourseID)
            {
                return BadRequest();
            }

            _context.Entry(courses).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoursesExists(id))
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

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
       /* [HttpPost]
        public async Task<ActionResult<Courses>> PostCourses(Courses courses)
        {
            if (_context.Courses == null)
            {
                return Problem("Entity set 'MarketplaceContext.Courses'  is null.");
            }
            _context.Courses.Add(courses);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourses", new { id = courses.CourseID }, courses);
        }
*/
        // DELETE: api/Courses/5
       /* [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourses(int id)
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }
            var courses = await _context.Courses.FindAsync(id);
            if (courses == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(courses);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool CoursesExists(int id)
        {
            return (_context.EmidsCourses?.Any(e => e.CourseId == id)).GetValueOrDefault();
        }
    }
}
