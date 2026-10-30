//using System;

namespace BlazorApp1.Models;

public class TaskItem
{
	public TaskItem()
	{
		public int Id { get; set }
		public string Title { get; set; }
		public bool IsCompleted { get; set; }
	}
}
