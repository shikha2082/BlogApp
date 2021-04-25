using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BlogApp.Models
{
    public partial class BlogAppDBContext : DbContext
    {
        public BlogAppDBContext()
        {
        }

        public BlogAppDBContext(DbContextOptions<BlogAppDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BlogComment> BlogComment { get; set; }
        public virtual DbSet<BlogPosts> BlogPosts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\PHARMACYE19;Initial catalog=BlogAppDB; Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BlogComment>(entity =>
            {
                entity.HasKey(e => e.CommentId)
                    .HasName("PK__BlogComment_CommentID");

                entity.Property(e => e.CommentId).HasColumnName("CommentID");

                entity.Property(e => e.BlogPostId).HasColumnName("BlogPostID");

                entity.Property(e => e.Comment).IsRequired();

                entity.Property(e => e.CommentedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.BlogPost)
                    .WithMany(p => p.BlogComment)
                    .HasForeignKey(d => d.BlogPostId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BlogComment_Blog");
            });

            modelBuilder.Entity<BlogPosts>(entity =>
            {
                entity.HasKey(e => e.BlogPostId)
                    .HasName("PK__BlogPosts_BlogPostID");

                entity.Property(e => e.BlogPostId).HasColumnName("BlogPostID");

                entity.Property(e => e.Body).IsRequired();

                entity.Property(e => e.PublishedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
