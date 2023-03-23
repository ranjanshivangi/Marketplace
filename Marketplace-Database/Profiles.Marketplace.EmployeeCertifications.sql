USE [Marketplace]
GO

/****** Object:  Table [Profiles].[EmployeeCertifications]    Script Date: 23-03-2023 17:23:08 ******/
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

ALTER TABLE [Profiles].[EmployeeCertifications]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCertifications_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Profiles].[EmployeeCertifications] CHECK CONSTRAINT [FK_EmployeeCertifications_Employees]
GO

ALTER TABLE [Profiles].[EmployeeCertifications]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCertifications_StandardCertificates] FOREIGN KEY([StandardCertificateId])
REFERENCES [Master].[StandardCertificates] ([CertificateId])
GO

ALTER TABLE [Profiles].[EmployeeCertifications] CHECK CONSTRAINT [FK_EmployeeCertifications_StandardCertificates]
GO


