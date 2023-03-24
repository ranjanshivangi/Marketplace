USE [Marketplace]
GO

/****** Object:  Table [Profiles].[Projects]    Script Date: 23-03-2023 17:24:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[Projects](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[ProjectType] [tinyint] NOT NULL,
	[IsXEmployeerProject] [tinyint] NOT NULL,
	[ProjectName] [nvarchar](50) NULL,
	[Role] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Notes] [nvarchar](1500) NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [Profiles].[Projects]  WITH CHECK ADD  CONSTRAINT [FK_Projects_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Profiles].[Projects] CHECK CONSTRAINT [FK_Projects_Employees]
GO


