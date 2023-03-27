using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class EmidsCourse
{
    public int CourseId { get; set; }

    public string? CourseName { get; set; }

    public string? CoursePlatform { get; set; }

    public byte CourseType { get; set; }
}
