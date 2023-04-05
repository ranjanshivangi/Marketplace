namespace Marketplace.DTO
{
    public class EmployeeCertificationDTO
    {
        public string CertificateName { get; set; }

        public byte IsStandardCertificate { get; set; }
        public int StandardCertificateId { get; set; }
        public DateTime CertificationsCompletionDate { get; set; }
        public string NonStandardCertificateName { get; set; }
        public string NonStandardIssuer{ get; set; }
        public byte NonStandardCertificateType { get; set; }

    }
}
