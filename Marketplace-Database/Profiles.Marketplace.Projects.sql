USE [Marketplace]
GO

/****** Object:  Table [Profiles].[Projects]    Script Date: 10-04-2023 13:09:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Profiles].[Projects](
	[EmployeeId] [nvarchar](12) NOT NULL,
	[ProjectType] [tinyint] NOT NULL,
	[IsXEmployeerProject] [tinyint] NOT NULL,
	[ProjectName] [nvarchar](50) NOT NULL,
	[Role] [nvarchar](50) NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Notes] [nvarchar](1500) NOT NULL,
	[XEmployeerID] [int] NOT NULL,
 CONSTRAINT [PK_Projects_1] PRIMARY KEY CLUSTERED 
(
	[ProjectName] ASC,
	[StartDate] ASC,
	[XEmployeerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [Profiles].[Projects]  WITH CHECK ADD  CONSTRAINT [FK_Projects_PastEmployments] FOREIGN KEY([EmployeeId], [XEmployeerID])
REFERENCES [Master].[PastEmployments] ([EmployeeId], [XEmployeerID])
GO

ALTER TABLE [Profiles].[Projects] CHECK CONSTRAINT [FK_Projects_PastEmployments]
GO


