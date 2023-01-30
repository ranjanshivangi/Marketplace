using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Marketplace.Models;

namespace Marketplace.Data
{
    public class MarketplaceContext : DbContext
    {
        public MarketplaceContext (DbContextOptions<MarketplaceContext> options)
            : base(options)
        {
        }

        public DbSet<Marketplace.Models.Job> Job { get; set; } = default!;

        public DbSet<Marketplace.Models.Rr> Rr { get; set; } = default!;
    }
}
