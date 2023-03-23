USE [MarketplaceTest]
GO

/****** Object:  Table [Profiles].[EmployeeCertifications]    Script Date: 20-03-2023 18:51:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[EmployeeCertifications](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[IsStandardCertificate] [tinyint] NOT NULL,
	[StandardCertificateId] [int] NOT NULL,
	[CertificationsCompletionDate] [date] NOT NULL,
	[NonStandardCertificateName] [nvarchar](100) NULL,
	[NonStandardIssuer] [nvarchar](50) NOT NULL,
	[NonStandardCertificateType] [tinyint] NOT NULL
) ON [PRIMARY]
GO


