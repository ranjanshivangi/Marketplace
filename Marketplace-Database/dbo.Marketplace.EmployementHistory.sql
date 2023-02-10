USE [Marketplace]
GO

/****** Object:  Table [dbo].[EmployementHistories]    Script Date: 10-02-2023 20:45:44 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmployementHistories](
	[Company] [nvarchar](450) NOT NULL,
	[Role] [nvarchar](450) NOT NULL,
	[Project] [nvarchar](450) NOT NULL,
	[IsCurrent] [nvarchar](max) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[EmployeeId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_EmployementHistories] PRIMARY KEY CLUSTERED 
(
	[Company] ASC,
	[Role] ASC,
	[Project] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmployementHistories]  WITH CHECK ADD  CONSTRAINT [FK_EmployementHistories_Employees_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([EmployeeId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[EmployementHistories] CHECK CONSTRAINT [FK_EmployementHistories_Employees_EmployeeId]
GO


