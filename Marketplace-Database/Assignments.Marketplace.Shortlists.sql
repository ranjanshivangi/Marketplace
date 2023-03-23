USE [Marketplace]
GO

/****** Object:  Table [Assignments].[Shortlists]    Script Date: 23-03-2023 16:30:59 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Assignments].[Shortlists](
	[ManagerEmployeeId] [nvarchar](12) NOT NULL,
	[ShortlistedEmployeeId] [nvarchar](12) NOT NULL,
	[ShortlistsId] [int] IDENTITY(1,1) NOT NULL,
	[RRnumber] [nvarchar](15) NOT NULL,
 CONSTRAINT [PK_Shortlists] PRIMARY KEY CLUSTERED 
(
	[ShortlistsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Assignments].[Shortlists]  WITH CHECK ADD  CONSTRAINT [FK_Shortlists_Employees] FOREIGN KEY([ManagerEmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Assignments].[Shortlists] CHECK CONSTRAINT [FK_Shortlists_Employees]
GO

ALTER TABLE [Assignments].[Shortlists]  WITH CHECK ADD  CONSTRAINT [FK_Shortlists_Employees1] FOREIGN KEY([ShortlistedEmployeeId])
REFERENCES [Master].[Employees] ([EmployeeId])
GO

ALTER TABLE [Assignments].[Shortlists] CHECK CONSTRAINT [FK_Shortlists_Employees1]
GO

ALTER TABLE [Assignments].[Shortlists]  WITH CHECK ADD  CONSTRAINT [FK_Shortlists_RR] FOREIGN KEY([RRnumber])
REFERENCES [Demands].[RR] ([RRNumber])
GO

ALTER TABLE [Assignments].[Shortlists] CHECK CONSTRAINT [FK_Shortlists_RR]
GO


