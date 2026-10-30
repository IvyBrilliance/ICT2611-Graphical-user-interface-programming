using Microsoft.EntityFrameworkCore;
using BlazorApp1.Models;

namespace BlazorApp1.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(
        DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<TaskItem> Tasks => Set<TaskItem>();
}