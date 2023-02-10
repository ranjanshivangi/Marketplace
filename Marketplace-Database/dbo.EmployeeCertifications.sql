USE [Marketplace]
GO

/****** Object:  Table [dbo].[EmployeeCertifications]    Script Date: 10-02-2023 20:47:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmployeeCertifications](
	[EmployeeId] [nvarchar](450) NOT NULL,
	[CertificationID] [int] NOT NULL,
 CONSTRAINT [PK_EmployeeCertifications] PRIMARY KEY CLUSTERED 
(
	[CertificationID] ASC,
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmployeeCertifications]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCertifications_Certifications_CertificationID] FOREIGN KEY([CertificationID])
REFERENCES [dbo].[Certifications] ([CertificationID])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployeeCertifications] CHECK CONSTRAINT [FK_EmployeeCertifications_Certifications_CertificationID]
GO

ALTER TABLE [dbo].[EmployeeCertifications]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeCertifications_Employees_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployeeCertifications] CHECK CONSTRAINT [FK_EmployeeCertifications_Employees_EmployeeId]
GO


