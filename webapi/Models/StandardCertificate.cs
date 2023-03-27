using System;
using System.Collections.Generic;

namespace MarketplaceAPI.Models;

public partial class StandardCertificate
{
    public int CertificateId { get; set; }

    public byte CertificateType { get; set; }

    public string Issuer { get; set; } = null!;

    public string CertificateName { get; set; } = null!;
}
