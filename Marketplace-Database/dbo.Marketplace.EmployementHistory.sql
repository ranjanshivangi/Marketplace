USE [Marketplace]
GO

/****** Object:  Table [dbo].[EmployementHistories]    Script Date: 13-02-2023 10:32:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmployementHistories](
	[CompanyName] [varchar](450) NOT NULL,
	[Role] [varchar](50) NOT NULL,
	[ProjectName] [varchar](100) NOT NULL,
	[IsCurrent] [bit] NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Description] [varchar](1500) NOT NULL,
	[EmployeeId] [varchar](12) NOT NULL,
 CONSTRAINT [PK_EmployementHistories] PRIMARY KEY CLUSTERED 
(
	[CompanyName] ASC,
	[Role] ASC,
	[ProjectName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmployementHistories]  WITH CHECK ADD  CONSTRAINT [FK_EmployementHistories_Employees_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployementHistories] CHECK CONSTRAINT [FK_EmployementHistories_Employees_EmployeeId]
GO


