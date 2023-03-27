using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class EmployeeCertification
{
    public string EmployeeId { get; set; } = null!;

    public byte IsStandardCertificate { get; set; }

    public int StandardCertificateId { get; set; }

    public DateTime CertificationsCompletionDate { get; set; }

    public string? NonStandardCertificateName { get; set; }

    public string NonStandardIssuer { get; set; } = null!;

    public byte NonStandardCertificateType { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual StandardCertificate StandardCertificate { get; set; } = null!;
}
