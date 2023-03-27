﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MarketplaceAPI.Data;
using MarketplaceAPI.Models;
using MarketplaceAPI.DAO;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PastEmploymentController : ControllerBase
    {
        private readonly MarketplaceContext _context;

        public PastEmploymentController(MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/EmployementHistories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PastEmployment>>> GetEmployementHistories()
        {
            if (_context.PastEmployments == null)
            {
                return NotFound();
            }
            return await _context.PastEmployments.ToListAsync();
        }

        // GET: api/EmployementHistories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<PastEmployment>>> GetEmployementHistory(string id)
        {
            if (_context.PastEmployments == null)
            {
                return NotFound();
            }
            var employementHistory = await _context.PastEmployments
            .Where(x => x.EmployeeId == id).ToListAsync(); if (employementHistory == null)
            {
                return NotFound();
            }
            return employementHistory;
        }

       

        // POST: api/EmployementHistories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PastEmployment>> PostEmployementHistory(PastEmploymentDAO pastEmployment)
        {
           
            var employee = _context.Employees.Find(pastEmployment.EmployeeId);
            if (employee == null)
            {
                return NotFound();
            }
            var pastEmploymentHistory = new PastEmployment
            {
                Employee = employee,
                EmployeeId = pastEmployment.EmployeeId,
                XemployeerId = pastEmployment.XemployeerId,
                XemployeerCompanyName = pastEmployment.XemployeerCompanyName,
                XstartDesignation = pastEmployment.XstartDesignation,
                StartDate = pastEmployment.StartDate,
                XlastDesignation = pastEmployment.XlastDesignation,
                EndDate = pastEmployment.EndDate,
                Notes = pastEmployment.Notes,
            };

            _context.PastEmployments.Add(pastEmploymentHistory);
           
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployementHistoryExists(pastEmployment.XemployeerId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployementHistory", new { id = pastEmployment.XemployeerId }, pastEmployment);
        }

    

        private bool EmployementHistoryExists(int id)
        {
            return (_context.PastEmployments?.Any(e => e.XemployeerId == id)).GetValueOrDefault();
        }
    }
}
