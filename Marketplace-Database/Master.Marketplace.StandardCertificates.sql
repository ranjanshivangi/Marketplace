USE [MarketplaceTest]
GO

/****** Object:  Table [Master].[StandardCertificates]    Script Date: 20-03-2023 18:45:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[StandardCertificates](
	[CertificateId] [int] NOT NULL,
	[CertificateType] [tinyint] NOT NULL,
	[Issuer] [nvarchar](50) NOT NULL,
	[CertificateName] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO


