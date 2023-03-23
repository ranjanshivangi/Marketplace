USE [Marketplace]
GO

/****** Object:  Table [Master].[Employees]    Script Date: 23-03-2023 17:21:51 ******/
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
	[About] [nvarchar](1500) NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


