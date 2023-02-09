
using Marketplace.Models;
using Microsoft.EntityFrameworkCore;


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
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<EmployeeCertification> EmployeeCertifications { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<EmployeeCourses> EmployeeCourses { get; set; }
        public DbSet<EmployementHistory> EmployementHistories { get; set; }

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


            modelBuilder.Entity<EmployeeCertification>()
               .HasKey(es => new { es.CertificationID, es.EmployeeId });
            modelBuilder.Entity<EmployeeCertification>()
                .HasOne(bc => bc.Employee)
                .WithMany(b => b.EmployeeCertification)
                .HasForeignKey(bc => bc.EmployeeId);
            modelBuilder.Entity<EmployeeCertification>()
                .HasOne(bc => bc.Certification)
                .WithMany(bc=>bc.EmployeeCertification)
                .HasForeignKey(bc => bc.CertificationID);


            modelBuilder.Entity<EmployeeCourses>()
               .HasKey(es => new { es.CourseID, es.EmployeeId });
            modelBuilder.Entity<EmployeeCourses>()
                .HasOne(bc => bc.Employee)
                .WithMany(b => b.EmployeeCourses)
                .HasForeignKey(bc => bc.EmployeeId);
            modelBuilder.Entity<EmployeeCourses>()
                .HasOne(bc => bc.Courses)
                .WithMany(bc => bc.EmployeeCourses)
                .HasForeignKey(bc => bc.CourseID);

            modelBuilder.Entity<Employee>()
                .HasMany(c => c.EmployeeHistory)
                .WithOne(c => c.Employee);

            modelBuilder.Entity<EmployementHistory>()
                .HasKey(a=>new {a.Company,a.Role,a.Project});

        }
    }
}
