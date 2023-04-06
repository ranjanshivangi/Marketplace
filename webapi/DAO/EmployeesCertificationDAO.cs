namespace MarketplaceAPI.DAO
{
	public class EmployeesCertificationDAO
	{
		public string EmployeeId { get; set; } = null!;

		public byte IsStandardCertificate { get; set; }

        public int? StandardCertificateId { get; set; }

		public DateTime? CertificationsCompletionDate { get; set; }

		public string? NonStandardCertificateName { get; set; }

		public string? NonStandardIssuer { get; set; } = null!;

		public byte? NonStandardCertificateType { get; set; }
	}
}
