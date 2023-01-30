using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Models;

public partial class MarketplaceContext : DbContext
{
    public MarketplaceContext()
    {
    }

    public MarketplaceContext(DbContextOptions<MarketplaceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Job> Jobs { get; set; }

    public virtual DbSet<Rr> Rrs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=SUBHAM-Das-L;Initial Catalog=Marketplace;Integrated Security=True;TrustServerCertificate=True;Trusted_Connection=True;MultipleActiveResultSets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Job>(entity =>
        {
            entity.HasKey(e => e.Jdid).HasName("PK_Jobs");

            entity.ToTable("Job");

            entity.Property(e => e.Jdid)
                .ValueGeneratedNever()
                .HasColumnName("JDID");
            entity.Property(e => e.About).HasColumnType("text");
            entity.Property(e => e.JobSummary).HasColumnType("text");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MustHaveSkills).HasColumnType("text");
            entity.Property(e => e.NicetohaveSkills).HasColumnType("text");
            entity.Property(e => e.RolesandResponsibilities).HasColumnType("text");
        });

        modelBuilder.Entity<Rr>(entity =>
        {
            entity.HasKey(e => e.Rrnumber);

            entity.ToTable("RR");

            entity.Property(e => e.Rrnumber)
                .HasMaxLength(12)
                .IsUnicode(false)
                .HasColumnName("RRNumber");
            entity.Property(e => e.AccountName)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.Bu)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("BU");
            entity.Property(e => e.ClosingRemarks).HasColumnType("text");
            entity.Property(e => e.Designation)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Jdid).HasColumnName("JDID");
            entity.Property(e => e.Proficiency)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.ProjectName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.TaggedEmployee)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.WorkLocation)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Jd).WithMany(p => p.Rrs)
                .HasForeignKey(d => d.Jdid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__RR__JDID__52593CB8");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
