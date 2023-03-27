namespace Marketplace.DTO
{
    public class EmployeeCertificationDTO
    {
        public int CertificationID { get; set; }
        public string CertificationsName { get; set; }
        public DateTime CertificationsCompletionDate { get; set; }
        public string CertificationsFrom { get; set; }
        public byte CertificationsType { get; set; }
    }
}
