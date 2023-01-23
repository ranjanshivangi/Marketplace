using Microsoft.EntityFrameworkCore;

namespace Marketplace.Models
{
    public class JobContext : DbContext
    {
        public JobContext(DbContextOptions<JobContext> options)
        : base(options)
        {
        }

        public DbSet<Jobs> Jobs { get; set; } = null!;
    }
}
