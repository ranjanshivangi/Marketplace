
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Marketplace.Models;

namespace Marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RRsController : ControllerBase
    {
        private readonly Data.MarketplaceContext _context;

        public RRsController(Data.MarketplaceContext context)
        {
            _context = context;
        }

        // GET: api/RRs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rr>>> GetRr()
        {
          if (_context.Rr == null)
          {
              return NotFound();
          }
            return await _context.Rr.ToListAsync();
        }

        // GET: api/RRs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rr>> GetRr(string id)
        {
          if (_context.Rr == null)
          {
              return NotFound();
          }
            var rr = await _context.Rr.FindAsync(id);

            if (rr == null)
            {
                return NotFound();
            }

            return rr;
        }

       

        private bool RrExists(string id)
        {
            return (_context.Rr?.Any(e => e.Rrnumber == id)).GetValueOrDefault();
        }
    }
}
