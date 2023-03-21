USE [MarketplaceTest]
GO

/****** Object:  Table [Master].[Employees]    Script Date: 20-03-2023 18:43:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Master].[Employees](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[EmployeeName] [nvarchar](100) NOT NULL,
	[Designation] [nvarchar](50) NOT NULL,
	[CurrentProject] [nvarchar](50) NOT NULL,
	[CurrentManager] [nvarchar](12) NOT NULL,
	[Status] [tinyint] NOT NULL,
	[EmailId] [nvarchar](100) NOT NULL,
	[PhoneNumber] [nvarchar](15) NOT NULL,
	[Location] [nvarchar](30) NOT NULL,
	[About] [nvarchar](1500) NOT NULL
) ON [PRIMARY]
GO


