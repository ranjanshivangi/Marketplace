USE [Marketplace]
GO

/****** Object:  Table [Master].[StandardCertificates]    Script Date: 23-03-2023 17:22:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[StandardCertificates](
	[CertificateId] [int] NOT NULL,
	[CertificateType] [tinyint] NOT NULL,
	[Issuer] [nvarchar](50) NOT NULL,
	[CertificateName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_StandardCertificates] PRIMARY KEY CLUSTERED 
(
	[CertificateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


