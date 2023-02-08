
using Marketplace.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;


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
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Skills> Skills { get; set; }
        public DbSet<EmployeeSkills> EmployeeSkills { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeSkills>()
                .HasKey(es => new { es.skillId, es.EmployeeId });
            modelBuilder.Entity<EmployeeSkills>()
                .HasOne(bc => bc.Employee)
                .WithMany(b => b.EmployeeSkills)
                .HasForeignKey(bc => bc.EmployeeId);
            modelBuilder.Entity<EmployeeSkills>()
                .HasOne(bc => bc.Skills)
                .WithMany(c => c.EmployeeSkills)
                .HasForeignKey(bc => bc.skillId);
        }
    }
}
