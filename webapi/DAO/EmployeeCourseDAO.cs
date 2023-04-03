namespace MarketplaceAPI.DAO
{
    public class EmployeeCourseDAO
    {
       public byte IsEmidsCourse { get; set; }


        public int? EmidsCourseId { get; set; }

        public DateTime? CourseCompletionDate { get; set; }

        public string? NonEmidsCourseName { get; set; }

        public string? NonEmidsCoursePlatform { get; set; } = null!;

        public byte? NonEmidsCourseType { get; set; }

    }
}
