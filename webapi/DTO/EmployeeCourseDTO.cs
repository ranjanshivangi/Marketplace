namespace Marketplace.DTO
{
    public class EmployeeCourseDTO
    {
        public string CourseName { get; set; }
        public byte IsEmidsCourse { get; set; }
        public int EmidsCourseId { get; set; }
        public DateTime CourseCompletionDate { get; set; }
        public string NonEmidsCourseName { get; set; }

        public string NonEmidsCoursePlatform { get; set; }
        public byte NonEmidsCourseType { get; set; }
    }
}
