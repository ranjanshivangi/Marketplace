using System;
using System.Collections.Generic;
using MarketplaceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketplaceAPI.Data;

public partial class MarketplaceContext : DbContext
{
    public MarketplaceContext()
    {
    }

    public MarketplaceContext(DbContextOptions<MarketplaceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<EmidsCourse> EmidsCourses { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<EmployeeCertification> EmployeeCertifications { get; set; }

    public virtual DbSet<EmployeeCourse> EmployeeCourses { get; set; }

    public virtual DbSet<EmployeesSkill> EmployeesSkills { get; set; }

    public virtual DbSet<JobDescription> JobDescriptions { get; set; }

    public virtual DbSet<PastEmployment> PastEmployments { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<Rr> Rrs { get; set; }

    public virtual DbSet<Shortlist> Shortlists { get; set; }

    public virtual DbSet<ShortlistedSkill> ShortlistedSkills { get; set; }

    public virtual DbSet<Skill> Skills { get; set; }

    public virtual DbSet<StandardCertificate> StandardCertificates { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=Marketplace;Integrated Security=True;TrustServerCertificate=True;Trusted_Connection=True;MultipleActiveResultSets=true");


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<EmidsCourse>(entity =>
        {
            entity.HasKey(e => e.CourseId);

            entity.ToTable("EmidsCourses", "Master");

            entity.Property(e => e.CourseId).ValueGeneratedNever();
            entity.Property(e => e.CourseName).HasMaxLength(50);
            entity.Property(e => e.CoursePlatform).HasMaxLength(50);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.ToTable("Employees", "Master");

            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.About).HasMaxLength(1500);
            entity.Property(e => e.CurrentManager).HasMaxLength(12);
            entity.Property(e => e.CurrentProject).HasMaxLength(50);
            entity.Property(e => e.Designation).HasMaxLength(50);
            entity.Property(e => e.EmailId).HasMaxLength(100);
            entity.Property(e => e.EmployeeName).HasMaxLength(100);
            entity.Property(e => e.Location).HasMaxLength(30);
            entity.Property(e => e.PhoneNumber).HasMaxLength(15);
        });

        modelBuilder.Entity<EmployeeCertification>(entity =>
        {

            entity.HasKey(standardCertificate => standardCertificate.StandardCertificateId);
            entity.ToTable("EmployeeCertifications", "Profiles");

            entity.Property(e => e.CertificationsCompletionDate).HasColumnType("date");
            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.NonStandardCertificateName).HasMaxLength(100);
            entity.Property(e => e.NonStandardIssuer).HasMaxLength(50);

            entity.HasOne(d => d.Employee).WithMany()
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeeCertifications_Employees");

            entity.HasOne(d => d.StandardCertificate).WithMany()
                .HasForeignKey(d => d.StandardCertificateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeeCertifications_StandardCertificates");
        });

        modelBuilder.Entity<EmployeeCourse>(entity =>
        {

            entity.HasKey(e => e.EmidsCourseId);
            entity.ToTable("EmployeeCourses", "Profiles");

            entity.Property(e => e.CourseCompletionDate).HasColumnType("date");
            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.NonEmidsCourseName).HasMaxLength(100);
            entity.Property(e => e.NonEmidsCoursePlatform).HasMaxLength(50);

            entity.HasOne(d => d.EmidsCourse).WithMany()
                .HasForeignKey(d => d.EmidsCourseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeeCourses_EmidsCourses1");

            entity.HasOne(d => d.Employee).WithMany()
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeeCourses_EmidsCourses");
        });

        modelBuilder.Entity<EmployeesSkill>(entity =>
        {
            entity.HasKey(e => e.SkillId);

            entity.ToTable("EmployeesSkills", "Profiles");

            entity.Property(e => e.SkillId).ValueGeneratedNever();
            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.LastUsed).HasColumnType("date");
            entity.Property(e => e.Proficience).HasMaxLength(50);

            entity.HasOne(d => d.Employee).WithMany(p => p.EmployeesSkills)
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeesSkills_Employees");

            entity.HasOne(d => d.Skill).WithOne(p => p.EmployeesSkill)
                .HasForeignKey<EmployeesSkill>(d => d.SkillId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_EmployeesSkills_Skills");
        });

        modelBuilder.Entity<JobDescription>(entity =>
        {
            entity.HasKey(e => e.Jdid);

            entity.ToTable("JobDescriptions", "Demands");

            entity.Property(e => e.Jdid).HasColumnName("JDID");
            entity.Property(e => e.About).HasMaxLength(100);
            entity.Property(e => e.JobSummary).HasMaxLength(1000);
            entity.Property(e => e.JobTitle).HasMaxLength(50);
            entity.Property(e => e.MustHaveSkills).HasMaxLength(500);
            entity.Property(e => e.NiceToHaveSkills).HasMaxLength(500);
            entity.Property(e => e.PrimarySkill).HasMaxLength(500);
            entity.Property(e => e.RolesandResponsibilities).HasMaxLength(500);
            entity.Property(e => e.SecondarySkill).HasMaxLength(500);
        });

        modelBuilder.Entity<PastEmployment>(entity =>
        {
            entity.HasKey(e => new { e.EmployeeId, e.XemployeerId });

            entity.ToTable("PastEmployments", "Master");

            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.XemployeerId).HasColumnName("XEmployeerID");
            entity.Property(e => e.EndDate).HasColumnType("date");
            entity.Property(e => e.Notes).HasMaxLength(1500);
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.XemployeerCompanyName)
                .HasMaxLength(50)
                .HasColumnName("XEmployeerCompanyName");
            entity.Property(e => e.XlastDesignation)
                .HasMaxLength(50)
                .HasColumnName("XLastDesignation");
            entity.Property(e => e.XstartDesignation)
                .HasMaxLength(50)
                .HasColumnName("XStartDesignation");

            entity.HasOne(d => d.Employee).WithMany(p => p.PastEmployments)
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PastEmployments_Employees");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Projects", "Profiles");

            entity.Property(e => e.EmployeeId).HasMaxLength(12);
            entity.Property(e => e.EndDate).HasColumnType("date");
            entity.Property(e => e.IsXemployeerProject).HasColumnName("IsXEmployeerProject");
            entity.Property(e => e.Notes).HasMaxLength(1500);
            entity.Property(e => e.ProjectName).HasMaxLength(50);
            entity.Property(e => e.Role).HasMaxLength(50);
            entity.Property(e => e.StartDate).HasColumnType("date");

            entity.HasOne(d => d.Employee).WithMany()
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Projects_Employees");
        });

        modelBuilder.Entity<Rr>(entity =>
        {
            entity.HasKey(e => e.Rrnumber);

            entity.ToTable("RR", "Demands");

            entity.Property(e => e.Rrnumber)
                .HasMaxLength(15)
                .HasColumnName("RRNumber");
            entity.Property(e => e.AccountName).HasMaxLength(25);
            entity.Property(e => e.Bu)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("BU");
            entity.Property(e => e.ClosingRemarks).HasMaxLength(50);
            entity.Property(e => e.Designation).HasMaxLength(50);
            entity.Property(e => e.Jdid).HasColumnName("JDID");
            entity.Property(e => e.Proficiency).HasMaxLength(25);
            entity.Property(e => e.ProjectName).HasMaxLength(50);
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.TaggedEmployee).HasMaxLength(15);
            entity.Property(e => e.WorkLocation).HasMaxLength(20);

            entity.HasOne(d => d.Jd).WithMany(p => p.Rrs)
                .HasForeignKey(d => d.Jdid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RR_JobDescriptions");
        });

        modelBuilder.Entity<Shortlist>(entity =>
        {
            entity.HasKey(e => e.ShortlistsId);

            entity.ToTable("Shortlists", "Assignments");

            entity.Property(e => e.ManagerEmployeeId).HasMaxLength(12);
            entity.Property(e => e.Rrnumber)
                .HasMaxLength(15)
                .HasColumnName("RRnumber");
            entity.Property(e => e.ShortlistedEmployeeId).HasMaxLength(12);

            entity.HasOne(d => d.ManagerEmployee).WithMany(p => p.ShortlistManagerEmployees)
                .HasForeignKey(d => d.ManagerEmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Shortlists_Employees");

            entity.HasOne(d => d.ShortlistedEmployee).WithMany(p => p.ShortlistShortlistedEmployees)
                .HasForeignKey(d => d.ShortlistedEmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Shortlists_Employees1");
        });

        modelBuilder.Entity<ShortlistedSkill>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.ToTable("ShortlistedSkills", "Assignments");

            //entity.Property(e => e.ShortlistedEmployeeId).HasMaxLength(12);
            entity.Property(e => e.ShortlistsId);
            entity.Property(e => e.EmployeeSkillId);           

            entity.HasOne(d => d.EmployeesSkill).WithMany()
                .HasForeignKey(d => d.EmployeeSkillId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ShortlistedSkills_EmployeesSkills");

            entity.HasOne(d => d.Shortlists).WithMany()
                .HasForeignKey(d => d.ShortlistsId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ShortlistedSkills_Shortlists");
        });

        modelBuilder.Entity<Skill>(entity =>
        {
            entity.ToTable("Skills", "Master");

            entity.Property(e => e.SkillId).ValueGeneratedNever();
            entity.Property(e => e.SkillName).HasMaxLength(50);
        });

        modelBuilder.Entity<StandardCertificate>(entity =>
        {
            entity.HasKey(e => e.CertificateId);

            entity.ToTable("StandardCertificates", "Master");

            entity.Property(e => e.CertificateId).ValueGeneratedNever();
            entity.Property(e => e.CertificateName).HasMaxLength(50);
            entity.Property(e => e.Issuer).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
