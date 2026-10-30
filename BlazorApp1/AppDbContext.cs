//using System;
//using Microsoft.EntityFrameworkCore;
//using BlazorApp1.Models;

namespace BlazorApp1.Data;

public class AppDbContext
{
	public AppDbContext( DbContextOptions<AppDbContext> options): base(options)
	{

	}

	public DbSet<TaskItem> Tasks => Set<TaskItem>();
}
